"use client";
// React
import * as React from "react";
import Image from 'next/image'

// Material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import SchoolIcon from "@mui/icons-material/School";
import AppBarComponent from "@/components/NavBar/NavBar";
import NavBar from "@/components/NavBar/NavBar";

import Landing from "@/components/Pages/Landing";
import MobileLanding from "@/components/Pages/MobileLanding";

/**
 * LandingPage is a React component that renders the landing page of the application.
 * It includes an NavBar with navigation buttons, a Hero section, a Features section, and a Footer.
 *
 * @returns {ReactElement} The React Element created by this function.
 */
export default function LandingPage() {
    return <Landing/>

}
