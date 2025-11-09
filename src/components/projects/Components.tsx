import { motion } from "motion/react";
import React, { ReactNode } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { cn } from "../ui/utils";

export const ProjectTitle = ({ label }: { label: string }) => {
  return (
    <motion.h1
      className="text-6xl font-bold mb-3 sm:mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {label}
    </motion.h1>
  );
};

export const ProjectHeader = ({ label }: { label: string }) => {
  return (
    <motion.h2
      className="text-4xl font-bold mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {label}
    </motion.h2>
  );
};

export const ProjectDescriptionWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8 flex flex-col"
    >
      {children}
    </motion.div>
  );
};

export const ProjectTimeline = ({
  timeline,
  tools,
  role,
}: {
  timeline: string;
  tools: string[];
  role: string[];
}) => {
  return (
    <div className="grid md:grid-cols-3 gap-2 text-sm">
      <div>
        <h3 className="font-semibold text-foreground mb-2">Timeline</h3>
        <p className="text-muted-foreground">{timeline}</p>
      </div>
      <div>
        <h3 className="font-semibold text-foreground sm:mb-2">Tools</h3>
        <div className="space-y-1">
          {tools.map((tool, index) => (
            <Badge key={index} variant="secondary" className="mr-2 mb-1">
              {tool}
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-2">Role</h3>
        <div className="flex flex-col gap-1">
          {role.map((roleItem, index) => (
            <p key={index} className="text-muted-foreground">
              {roleItem}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProjectSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const ProjectSection = ({
  id,
  children,
  className,
}: ProjectSectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className={cn("max-w-4xl", className)}
  >
    {children}
  </motion.section>
);

export const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`bg-background rounded-3xl p-8 backdrop-blur-sm`}>
      {children}
    </div>
  );
};

export const ProjectSkill = ({
  skill,
  index,
}: {
  skill: string;
  index: number;
}) => {
  return (
    <motion.div
      key={skill}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
      whileHover={{ scale: 1.05 }}
    >
      <Badge
        variant="secondary"
        className="px-3 py-1 bg-white/90 text-orange-700 border border-orange-200 hover:bg-orange-50 transition-colors duration-200"
      >
        {skill}
      </Badge>
    </motion.div>
  );
};

// Enhanced callout box for important information
interface CalloutBoxProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function CalloutBox({ title, children, icon }: CalloutBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-gradient-to-br from-pink-100/80 to-purple-100/80 rounded-2xl p-6 border backdrop-blur-sm my-6`}
    >
      <div className="flex items-center gap-3 sm:mb-4">
        {icon}
        <h4 className="font-bold text-lg">{title}</h4>
      </div>
      <div className="space-y-3">{children}</div>
    </motion.div>
  );
}

// Enhanced list item with better visual hierarchy
interface EnhancedListItemProps {
  title: string;
  description: string;
  index?: number;
}

export function EnhancedListItem({
  title,
  description,
  index,
}: EnhancedListItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index || 0) * 0.1 }}
      className="flex gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-pink-100 hover:shadow-md transition-all duration-300"
    >
      {index !== undefined && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500/80 to-purple-500/80 text-white flex items-center justify-center font-bold text-sm">
          {index + 1}
        </div>
      )}
      <div className="flex-1">
        <h5 className="font-bold text-foreground mb-2">{title}</h5>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Stats or key points grid
interface StatsGridProps {
  items: Array<{
    label: string;
    value: string;
    color?: string;
  }>;
}

export function StatsGrid({ items }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className={`text-2xl font-bold mb-2`}>{item.value}</div>
              <div className="text-sm font-medium text-muted-foreground">
                {item.label}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// Quote or testimonial component
interface QuoteBoxProps {
  quote: string;
  author?: string;
  role?: string;
}

export function QuoteBox({ quote, author, role }: QuoteBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-2xl p-4 border-l-4 border-purple-400 backdrop-blur-sm"
    >
      <blockquote className="text-foreground leading-relaxed">
        "{quote}"
      </blockquote>
      {author && (
        <div className="text-right">
          <div className="font-semibold text-purple-700">{author}</div>
          {role && <div className="text-sm text-muted-foreground">{role}</div>}
        </div>
      )}
    </motion.div>
  );
}

// Two-column layout for content
interface TwoColumnLayoutProps {
  left: ReactNode;
  right: ReactNode;
}

export function TwoColumnLayout({ left, right }: TwoColumnLayoutProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 backdrop-blur-sm`}
      >
        {left}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 backdrop-blur-sm`}
      >
        {right}
      </motion.div>
    </div>
  );
}

// Key insights component
interface KeyInsightProps {
  insights: string[];
  title?: string;
}

export function KeyInsights({
  insights,
  title = "Key Insights",
}: KeyInsightProps) {
  return (
    <CalloutBox title={title}>
      <ul className="space-y-3">
        {insights.map((insight, index) => (
          <li className="list-disc list-inside" key={index}>
            {insight}
          </li>
        ))}
      </ul>
    </CalloutBox>
  );
}

// Highlight text component
interface HighlightTextProps {
  children: ReactNode;
  color?: "purple" | "blue" | "green" | "orange" | "pink";
}

export function HighlightText({
  children,
  color = "purple",
}: HighlightTextProps) {
  const colorClasses = {
    purple: "bg-purple-100 text-purple-900",
    blue: "bg-blue-100 text-blue-900",
    green: "bg-green-100 text-green-900",
    orange: "bg-orange-100 text-orange-900",
    pink: "bg-pink-100 text-pink-900",
  };

  return (
    <span
      className={`${colorClasses[color]} px-2 py-1 rounded-md font-semibold`}
    >
      {children}
    </span>
  );
}

interface SectionProps {
  label: string;
  content?: ReactNode;
}

export function Section({ label, content }: SectionProps) {
  return (
    <div className="flex items-start gap-2">
      <div className="flex flex-col gap-4">
        <h4 className="text-lg font-bold">{label}</h4>
        {content && (
          <div className="text-muted-foreground font-normal space-y-3">
            {typeof content === "string" ? <p>{content}</p> : content}
          </div>
        )}
      </div>
    </div>
  );
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: ReactNode;
  color?: string;
  images?: { image: string; description?: string }[];
}

export function ProcessStep({
  number,
  title,
  description,
  images,
  color = "bg-purple-100",
}: ProcessStepProps) {
  const renderMedia = (
    media: { image: string; description?: string },
    index: number
  ) => {
    const isVideo = media?.image?.toLowerCase().endsWith(".mov");

    const mediaNode = isVideo ? (
      <video
        src={media.image}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <img
        src={media.image}
        alt={media.description || title}
        className="max-h-[400px] w-full h-auto object-contain object-center"
      />
    );

    return (
      <motion.figure
        key={`${media.image}-${index}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-3 flex-1"
      >
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/40 shadow-sm bg-white/40"
        >
          {mediaNode}
        </motion.div>
        {media.description && (
          <figcaption className="text-xs text-muted-foreground font-semibold">
            {media.description}
          </figcaption>
        )}
      </motion.figure>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div
          className={`w-10 h-10 rounded-full ${color} flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-sm font-bold">{number}</span>
        </div>
        <div className="flex-1">
          <h5 className="mb-2 font-semibold text-foreground">{title}</h5>
          <div className="text-sm text-muted-foreground font-normal">
            {typeof description === "string" ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
      {images && images.length > 0 && (
        <ImageWrapper>
          <div className="flex flex-col sm:flex-row items-end justify-between gap-4">
            {images.map((media, index) => renderMedia(media, index))}
          </div>
        </ImageWrapper>
      )}
    </div>
  );
}
