/**
 * removes browser's default styling on hyperlink (`a`).
 */
export declare const stripoutLink: () => import("@cssfn/cssfn").Rule;
/**
 * removes browser's default styling on control (`input`, `textarea`, `button`, etc).
 */
export declare const stripoutControl: () => import("@cssfn/cssfn").Rule;
/**
 * removes browser's default styling on `input[type=**text**]`.
 * `**text**` = `text`|`search`|`password`|`email`|`tel`|`url`|`number`|`time`|`week`|`date`|`datetime-local`|`month`
 */
export declare const stripoutTextbox: () => import("@cssfn/cssfn").Rule;
export declare const rangeTrackElm: string[];
export declare const rangeThumbElm: string[];
/**
 * removes browser's default styling on `input[type=range]`.
 */
export declare const stripoutRange: () => import("@cssfn/cssfn").Rule;
/**
 * removes browser's default styling on list (`ul>li` & `ol>li`).
 */
export declare const stripoutList: () => import("@cssfn/cssfn").Rule;
/**
 * removes browser's default styling on figure.
 */
export declare const stripoutFigure: () => import("@cssfn/cssfn").Rule;
/**
 * removes browser's default styling on focusable element.
 */
export declare const stripoutFocusableElement: () => import("@cssfn/cssfn").Rule;
/**
 * hides browser's default scrollbar.
 */
export declare const stripoutScrollbar: () => import("@cssfn/cssfn").Rule;
/**
 * removes browser's default styling on image.
 */
export declare const stripoutImage: () => import("@cssfn/cssfn").Rule;
/**
 * removes browser's default styling on dialog.
 */
export declare const stripoutDialog: () => import("@cssfn/cssfn").Rule;
