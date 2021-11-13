"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripoutImage = exports.stripoutScrollbar = exports.stripoutFocusableElement = exports.stripoutFigure = exports.stripoutList = exports.stripoutRange = exports.rangeThumbElm = exports.rangeTrackElm = exports.stripoutTextbox = exports.stripoutControl = exports.stripoutLink = void 0;
const cssfn_1 = require("@cssfn/cssfn"); // cssfn core
const unset = 'unset';
const none = 'none';
/**
 * removes browser's default styling on hyperlink (`a`).
 */
const stripoutLink = () => (0, cssfn_1.composition)([
    (0, cssfn_1.imports)([
        (0, exports.stripoutFocusableElement)(),
    ]),
    (0, cssfn_1.layout)({
        color: unset,
        textDecoration: unset,
        cursor: unset, // reset hand pointer
    }),
    (0, cssfn_1.variants)([
        (0, cssfn_1.isActive)([
            (0, cssfn_1.layout)({
                color: unset, // reset blue color
            }),
        ]),
    ]),
]);
exports.stripoutLink = stripoutLink;
/**
 * removes browser's default styling on control (`input`, `textarea`, `button`, etc).
 */
const stripoutControl = () => (0, cssfn_1.composition)([
    (0, cssfn_1.imports)([
        (0, exports.stripoutFocusableElement)(),
    ]),
    (0, cssfn_1.layout)({
        appearance: none,
        textRendering: unset,
        color: unset,
        letterSpacing: unset,
        wordSpacing: unset,
        textTransform: unset,
        textIndent: unset,
        textShadow: unset,
        textAlign: unset,
        backgroundColor: unset,
        cursor: unset,
        margin: unset,
        font: unset,
        padding: unset,
        border: unset,
        borderRadius: unset,
        boxSizing: unset,
    }),
]);
exports.stripoutControl = stripoutControl;
/**
 * removes browser's default styling on `input[type=**text**]`.
 * `**text**` = `text`|`search`|`password`|`email`|`tel`|`url`|`number`|`time`|`week`|`date`|`datetime-local`|`month`
 */
const stripoutTextbox = () => (0, cssfn_1.composition)([
    (0, cssfn_1.imports)([
        (0, exports.stripoutControl)(),
    ]),
    (0, cssfn_1.layout)({
        '-moz-appearance': 'textfield',
        // children:
        ...(0, cssfn_1.children)(['::-webkit-calendar-picker-indicator', '::-webkit-inner-spin-button', '::-webkit-search-cancel-button'], [
            (0, cssfn_1.layout)({
                appearance: none,
                display: none,
            }),
        ]),
    }),
    (0, cssfn_1.variants)([
        (0, cssfn_1.rule)([':valid', ':invalid'], [
            (0, cssfn_1.layout)({
                boxShadow: unset,
            }),
        ]),
    ]),
]);
exports.stripoutTextbox = stripoutTextbox;
exports.rangeTrackElm = ['::-webkit-slider-runnable-track', '::-moz-range-track', '::-ms-track'];
exports.rangeThumbElm = ['::-webkit-slider-thumb', '::-moz-range-thumb', '::-ms-thumb'];
/**
 * removes browser's default styling on `input[type=range]`.
 */
const stripoutRange = () => (0, cssfn_1.composition)([
    (0, cssfn_1.imports)([
        (0, exports.stripoutControl)(),
    ]),
    (0, cssfn_1.layout)({
        // children:
        ...(0, cssfn_1.children)([exports.rangeTrackElm, exports.rangeThumbElm], [
            (0, cssfn_1.imports)([
                (0, exports.stripoutControl)(),
            ]),
        ], { groupSelectors: false }), // any invalid selector does not cause the whole selectors to fail
    }),
]);
exports.stripoutRange = stripoutRange;
/**
 * removes browser's default styling on list (`ul>li` & `ol>li`).
 */
const stripoutList = () => (0, cssfn_1.composition)([
    (0, cssfn_1.layout)({
        listStyleType: none,
        marginBlockStart: unset,
        marginBlockEnd: unset,
        marginInlineStart: unset,
        marginInlineEnd: unset,
        paddingInlineStart: unset,
        // children:
        ...(0, cssfn_1.children)('*', [
            (0, cssfn_1.layout)({
                display: unset,
                textAlign: unset,
            }),
        ]),
    }),
]);
exports.stripoutList = stripoutList;
/**
 * removes browser's default styling on figure.
 */
const stripoutFigure = () => (0, cssfn_1.composition)([
    (0, cssfn_1.layout)({
        display: unset,
        marginBlockStart: unset,
        marginBlockEnd: unset,
        marginInlineStart: unset,
        marginInlineEnd: unset,
    }),
]);
exports.stripoutFigure = stripoutFigure;
/**
 * removes browser's default styling on focusable element.
 */
const stripoutFocusableElement = () => (0, cssfn_1.composition)([
    (0, cssfn_1.variants)([
        (0, cssfn_1.isFocus)([
            (0, cssfn_1.layout)({
                outline: unset,
                outlineOffset: unset, // reset focus outline
            }),
        ]),
        (0, cssfn_1.isFocusVisible)([
            (0, cssfn_1.layout)({
                outline: unset,
                outlineOffset: unset, // reset focus outline
            }),
        ]),
    ]),
]);
exports.stripoutFocusableElement = stripoutFocusableElement;
/**
 * hides browser's default scrollbar.
 */
const stripoutScrollbar = () => (0, cssfn_1.composition)([
    (0, cssfn_1.layout)({
        scrollbarWidth: none,
        '-ms-overflow-style': none,
        // children:
        ...(0, cssfn_1.children)('::-webkit-scrollbar', [
            (0, cssfn_1.layout)({
                display: none,
            }),
        ]),
    }),
]);
exports.stripoutScrollbar = stripoutScrollbar;
/**
 * removes browser's default styling on image.
 */
const stripoutImage = () => (0, cssfn_1.composition)([
    (0, cssfn_1.layout)({
        // layouts:
        display: 'block',
        // sizes:
        // fix the image's abnormal *display=block* sizing:
        // span to maximum width:
        boxSizing: 'border-box',
        inlineSize: 'fill-available',
        fallbacks: {
            inlineSize: '100%',
        },
    }),
]);
exports.stripoutImage = stripoutImage;
