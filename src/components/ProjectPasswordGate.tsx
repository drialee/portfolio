import { FormEvent, ReactNode, useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const STORAGE_KEY = "project-page-access-granted";
const FALLBACK_PASSWORD = "dria-projects";

const projectPassword = (process.env.REACT_APP_PROJECT_PASSWORD ?? "").trim();

type ProjectPasswordGateProps = {
  children: ReactNode;
  title?: string;
};

export function ProjectPasswordGate({
  children,
  title,
}: ProjectPasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return sessionStorage.getItem(STORAGE_KEY) === "true";
  });

  const expectedPassword = projectPassword || FALLBACK_PASSWORD;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.trim() === expectedPassword) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setIsAuthorized(true);
      setError(undefined);
      return;
    }

    setError("Incorrect password. Please try again.");
  };

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md space-y-6 text-center rounded-2xl border border-foreground/10 bg-background/80 p-10 shadow-2xl backdrop-blur-md">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Password Required
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            {title ? `${title} is password protected` : "Unlock this project"}
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter the password to view this case study.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2 text-left">
            <label
              htmlFor="project-password"
              className="text-sm font-medium text-muted-foreground"
            >
              Password
            </label>
            <Input
              id="project-password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              spellCheck={false}
              required
            />
          </div>

          {error ? (
            <p className="text-sm font-medium text-destructive">{error}</p>
          ) : null}

          <Button type="submit" className="w-full">
            Unlock project
          </Button>
        </form>
        <p className="text-xs text-muted-foreground">
          Need the password? Please contact me directly.
        </p>
      </div>
    </div>
  );
}
