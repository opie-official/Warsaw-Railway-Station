/**
 * @file core.ts
 * @author OPIE
 */


import React from "react";

/**
 * @interface PageProps
 * @param visible {boolean} a parameter of visibility page (if true then starts an animation of appearance)
 * @param ref {React.RefObject<HTMLDivElement>} а parameter for the inner container, means a regular link for useRef
 */
export interface PageProps {
    visible: boolean;
    ref: React.RefObject<HTMLDivElement | null>
    is_book_open
}