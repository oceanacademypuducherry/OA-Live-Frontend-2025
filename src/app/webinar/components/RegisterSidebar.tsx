// src/webinar_components/RegistrationSidebar.tsx
"use client";

import React from "react";
import { RegistrationForm } from "./RegistrationForm";

interface RegistrationSidebarProps {
  webinarTitle: string;
  isRegistered: boolean;
  onRegister: () => void;
}

export const RegistrationSidebar: React.FC<RegistrationSidebarProps> = ({
  webinarTitle,
  isRegistered,
  onRegister,
}) => {
  return (
    <aside className="sticky top-8 w-full">
      <RegistrationForm
        webinarTitle={webinarTitle}
        onRegistrationComplete={onRegister}
        isRegistered={isRegistered}
      />
    </aside>
  );
};
