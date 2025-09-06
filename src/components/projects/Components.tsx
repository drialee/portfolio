import { motion } from "motion/react";
import React, { ReactNode } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export const ProjectTitle = ({ label }: { label: string }) => {
  return (
    <motion.h1
      className="text-6xl font-bold mb-6"
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
      className="text-4xl font-bold mb-8 text-center"
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
    <div className="grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <h3 className="font-semibold text-foreground mb-2">Timeline</h3>
        <p className="text-muted-foreground">{timeline}</p>
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-2">Tools</h3>
        <div className="space-y-1">
          {tools.map((tool) => (
            <Badge variant="secondary" className="mr-2 mb-1">
              {tool}
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-2">Role</h3>
        <div className="space-y-1">
          {role.map((role) => (
            <p className="mr-2 mb-1 text-muted-foreground">{role}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectSection = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl"
    >
      {children}
    </motion.section>
  );
};

export const ImageWrapper = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) => {
  const colorClasses = {
    purple: "bg-gradient-to-br from-purple-100/80 to-purple-100/80",
    pink: "bg-gradient-to-br from-pink-100/80 to-pink-100/80",
    blue: "bg-gradient-to-br from-blue-100/80 to-blue-100/80",
    cyan: "bg-gradient-to-br from-cyan-100/80 to-cyan-100/80",
    red: "bg-gradient-to-br from-red-100/80 to-red-100/80",
    orange: "bg-gradient-to-br from-orange-100/80 to-orange-100/80",
    yellow: "bg-gradient-to-br from-yellow-100/80 to-yellow-100/80",
  };

  if (!color) {
    const colors = Object.keys(colorClasses);
    color = colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div
      className={`${colorClasses[color as keyof typeof colorClasses]} rounded-3xl p-8 backdrop-blur-sm`}
    >
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
  color?: "blue" | "purple" | "green" | "orange" | "pink";
  icon?: ReactNode;
}

export function CalloutBox({
  title,
  children,
  color = "blue",
  icon,
}: CalloutBoxProps) {
  const colorClasses = {
    blue: "from-blue-100/80 to-cyan-100/80 border-blue-200 text-blue-900",
    purple:
      "from-purple-100/80 to-pink-100/80 border-purple-200 text-purple-900",
    green:
      "from-green-100/80 to-emerald-100/80 border-green-200 text-green-900",
    orange:
      "from-orange-100/80 to-amber-100/80 border-orange-200 text-orange-900",
    pink: "from-pink-100/80 to-rose-100/80 border-pink-200 text-pink-900",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-gradient-to-br ${colorClasses[color]} rounded-2xl p-6 border backdrop-blur-sm my-6`}
    >
      <div className="flex items-center gap-3 mb-4">
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
      className="flex gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-purple-100 hover:shadow-md transition-all duration-300"
    >
      {index !== undefined && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-sm">
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
              <div
                className={`text-2xl font-bold ${item.color || "text-purple-600"} mb-2`}
              >
                {item.value}
              </div>
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
      className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-2xl p-8 my-8 border-l-4 border-purple-400 backdrop-blur-sm"
    >
      <blockquote className="text-lg italic text-foreground leading-relaxed mb-4">
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
  leftColor?: string;
  rightColor?: string;
}

export function TwoColumnLayout({
  left,
  right,
  leftColor = "from-blue-50/80 to-cyan-50/80",
  rightColor = "from-purple-50/80 to-pink-50/80",
}: TwoColumnLayoutProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`bg-gradient-to-br ${leftColor} rounded-2xl p-6 backdrop-blur-sm`}
      >
        {left}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`bg-gradient-to-br ${rightColor} rounded-2xl p-6 backdrop-blur-sm`}
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
    <CalloutBox
      title={title}
      color="green"
      icon={
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">
          💡
        </div>
      }
    >
      <div className="space-y-3">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2"></div>
            <p className="text-green-800 leading-relaxed">{insight}</p>
          </motion.div>
        ))}
      </div>
    </CalloutBox>
  );
}

// Process steps component
interface ProcessStep {
  title: string;
  description: string;
  details?: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="space-y-6 my-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative"
        >
          <div className="flex gap-6">
            {/* Step number */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-12 bg-gradient-to-b from-purple-300 to-transparent mx-auto mt-4"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white/80 to-purple-50/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl text-purple-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>
                  {step.details && (
                    <p className="text-sm text-purple-700 font-medium bg-purple-100/50 p-3 rounded-xl">
                      {step.details}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
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
