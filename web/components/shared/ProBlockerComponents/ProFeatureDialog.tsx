import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { UpgradeToProCTA } from "@/components/templates/pricing/upgradeToProCTA";
import { FeatureName, useProFeature } from "@/hooks/useProFeature";

interface ProFeatureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  featureName: FeatureName;
}

export function ProFeatureDialog({
  isOpen,
  onClose,
  featureName,
}: ProFeatureDialogProps) {
  const { customDescription, title, isPro } = useProFeature(featureName);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-gray-500 mb-4">
          {customDescription ||
            "The Free plan only comes with 10,000 requests per month, but getting more is easy."}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Free</h3>
            {!isPro && (
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                Current plan
              </span>
            )}
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                10k free requests/month
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                Access to Dashboard
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                Free, truly
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Pro</h3>
            {isPro && (
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                Current plan
              </span>
            )}
            <span className="text-sm">$20/user</span>
            <p className="text-sm mt-2">Everything in Free, plus:</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                Limitless requests (first 100k free)
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                Access to all features
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                Standard support
              </li>
            </ul>
            <Link
              href="https://www.helicone.ai/pricing"
              className="text-sm text-blue-600 mt-2 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all features →
            </Link>

            <UpgradeToProCTA
              defaultPrompts={featureName === "Prompts"}
              defaultAlerts={featureName === "Alerts"}
              showAddons={featureName === "Prompts" || featureName === "Alerts"}
            />
          </div>
        </div>

        {featureName === "time_filter" && (
          <p className="text-sm text-gray-500 mt-4">
            Don&apos;t worry, we are still processing all your incoming
            requests. You will be able to see them when you upgrade to Pro.
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
