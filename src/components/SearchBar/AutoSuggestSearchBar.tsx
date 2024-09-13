"use client"
import { Box, TextField } from "@mui/material";
import React, { ChangeEvent, InputHTMLAttributes, SyntheticEvent, useState } from "react";

export const AutoSuggestSearchBar = ({ HTMLElementNameAttr }: { HTMLElementNameAttr: string }) => {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    // Array of search suggestions
    const searchOptions = [
        "apple",
        "banana",
        "grape",
        "orange",
        "pineapple",
        "strawberry",
        "watermelon",
        "berry"
    ];

    // Function to handle input changes
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setInput(query);

        // Filter the suggestions based on the input query
        if (query.length > 0) {
            const filteredSuggestions = searchOptions.filter((option) =>
                option.toLowerCase().startsWith(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]); // If the query is empty, don't show any suggestions
        }
    };

    // Function to handle click on suggestion
    const handleSuggestionClick = (suggestion: string) => {
        setInput(suggestion); // Set input to the clicked suggestion
        setSuggestions([]); // Clear suggestions
    };

    return (
        <Box>
            <TextField
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Start typing"
                name={HTMLElementNameAttr}
            />

            {/* Suggestions list */}
            {suggestions.length > 0 && (
                <Box sx={{ bgcolor: "lightgray", borderRadius: 5, }}>
                    {suggestions.map((suggestion, index) => (
                        <Box sx={{ bgcolor: "white", borderColor: "red", borderRadius: 1, ":hover": { bgcolor: "lightgray" } }} key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};