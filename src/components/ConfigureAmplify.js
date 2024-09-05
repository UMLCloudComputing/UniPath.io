// components/ConfigureAmplify.tsx
"use client";

import config from "ROOT/amplify_outputs.json";
import { Amplify } from "aws-amplify";

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
    return null;
}