import { Suspense } from "react";
import HomePage from "./page";
import HomeLoading from "./loading";
import React from "react";

export default function HomeLayout() {
    return (
        <Suspense fallback={<HomeLoading />}>
            <HomePage />
        </Suspense>
    )
}