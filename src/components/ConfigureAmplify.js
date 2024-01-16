// components/ConfigureAmplify.tsx
"use client";

import config from "MAIN/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
    return null;
}