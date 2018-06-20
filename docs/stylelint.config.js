module.exports = {
    plugins: [
        'stylelint-declaration-strict-value',
        'stylelint-order',
        'stylelint-no-unsupported-browser-features',
        'stylelint-csstree-validator',
    ],
    rules: {
        // =================
        // ==== PLUGINS ====
        // =================

        // Order related linting rules for stylelint.
        // https://github.com/hudochenkov/stylelint-order
        'order/order': [
            "custom-properties",
            "declarations",
            "rules",
		],

        "plugin/no-unsupported-browser-features": [true, {
            ignore: ["flexbox", "outline"],
            browsers: [
                "last 2 versions",
                "Explorer >= 10",
                "not OperaMobile >=0",
                "not Blackberry >=0",
                "not Baidu >=0",
                "not OperaMini all"
            ],
        }],

        "csstree/validator": true,

        // Checks the use variable on declaration
        // https://github.com/sh-waqar/stylelint-declaration-use-variable#usage
        'scale-unlimited/declaration-strict-value': [
            ['color', 'background-color'],
            {
                ignoreKeywords: {
                    "color": ["inherit"],
                    "background-color": ["transparent", "inherit"],
                },
            },
        ],


        // =================
        // ==== @ RULES ====
        // =================

        // http://stylelint.io/user-guide/rules/at-rule-blacklist
        // TODO 'at-rule-blacklist': [],

        // http://stylelint.io/user-guide/rules/at-rule-empty-line-before
        // TODO 'at-rule-empty-line-before': 'always'|'never',

        // Specify lowercase or uppercase for at-rules names.
        // http://stylelint.io/user-guide/rules/at-rule-name-case/
        'at-rule-name-case': 'lower',

        // http://stylelint.io/user-guide/rules/at-rule-name-newline-after
        // TODO 'at-rule-name-newline-after': 'always'|'always-multi-line',

        // http://stylelint.io/user-guide/rules/at-rule-name-space-after
        // TODO 'at-rule-name-space-after': 'always'|'always-single-line',

        // http://stylelint.io/user-guide/rules/at-rule-no-unknown
        // TODO 'at-rule-no-unknown': true,

        // http://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
        // TODO 'at-rule-no-vendor-prefix': true,

        // http://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after
        // TODO 'at-rule-semicolon-newline-after': 'always',

        // http://stylelint.io/user-guide/rules/at-rule-whitelist
        // TODO 'at-rule-whitelist': string|[],

        // ===============
        // ==== BLOCK ====
        // ===============

        // Disallow an empty line before the closing brace of blocks.
        // http://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/
        'block-closing-brace-empty-line-before': 'never',

        // Require a newline or disallow whitespace after the closing brace of blocks.
        // http://stylelint.io/user-guide/rules/block-closing-brace-newline-after/
        'block-closing-brace-newline-after': 'always',

        // Require a newline or disallow whitespace before the closing brace of blocks.
        // http://stylelint.io/user-guide/rules/block-closing-brace-newline-before/
        'block-closing-brace-newline-before': 'always-multi-line',

        // http://stylelint.io/user-guide/rules/block-closing-brace-space-after
        // DISABLED 'block-closing-brace-space-after': 'always'|'always-single-line'|'never-single-line'|'always-multi-line'|'never-multi-line',

        // http://stylelint.io/user-guide/rules/block-closing-brace-space-before
        // DISABLED 'block-closing-brace-space-before': 'always'|'never'|'always-single-line'|'never-single-line'|'always-multi-line'|'never-multi-line',

        // Disallow empty blocks.
        // http://stylelint.io/user-guide/rules/block-no-empty/
        'block-no-empty': true,

        // Allow single-line blocks.
        // http://stylelint.io/user-guide/rules/block-no-single-line
        // DISABLED 'block-no-single-line': true,

        // Require a newline after the opening brace of blocks.
        // http://stylelint.io/user-guide/rules/block-opening-brace-newline-after/
        'block-opening-brace-newline-after': 'always-multi-line',

        // Require a newline or disallow whitespace before the opening brace of blocks.
        // http://stylelint.io/user-guide/rules/block-opening-brace-newline-before
        // DISABLED 'block-opening-brace-newline-before': 'never',

        // Require a single space or disallow whitespace after the opening brace of blocks.
        // http://stylelint.io/user-guide/rules/block-opening-brace-space-after/
        'block-opening-brace-space-after': 'always-single-line',

        // Require a single space or disallow whitespace before the opening brace of blocks.
        // http://stylelint.io/user-guide/rules/block-opening-brace-space-before/
        'block-opening-brace-space-before': 'always',


        // ===============
        // ==== COLOR ====
        // ===============

        // Specify lowercase or uppercase for hex colors.
        // http://stylelint.io/user-guide/rules/color-hex-case/
        'color-hex-case': 'lower',

        // Specify short or long notation for hex colors.
        // http://stylelint.io/user-guide/rules/color-hex-length
        'color-hex-length': 'long',

        // Disallow named colors.
        // http://stylelint.io/user-guide/rules/color-named
        'color-named': 'never',

        // Disallow hex colors.
        // http://stylelint.io/user-guide/rules/color-no-hex
        // DISABLED 'color-no-hex': true,

        // Disallow invalid hex colors.
        // http://stylelint.io/user-guide/rules/color-no-invalid-hex
        'color-no-invalid-hex': true,


        // ==================
        // ==== COMMENTS ====
        // ==================

        // Require or disallow an empty line before comments.
        // http://stylelint.io/user-guide/rules/comment-empty-line-before
        'comment-empty-line-before': 'never',

        // Disallow empty comments.
        // http://stylelint.io/user-guide/rules/comment-no-empty
        'comment-no-empty': true,

        // Require or disallow whitespace on the inside of comment markers.
        // http://stylelint.io/user-guide/rules/comment-whitespace-inside
        'comment-whitespace-inside': 'always',

        // http://stylelint.io/user-guide/rules/comment-word-blacklist
        // DISABLED 'comment-word-blacklist': string|[],


        // ========================
        // ==== CUSTOM OPTIONS ====
        // ========================

        // http://stylelint.io/user-guide/rules/custom-media-pattern
        // TODO 'custom-media-pattern': string,

        // http://stylelint.io/user-guide/rules/custom-property-empty-line-before
        // TODO 'custom-property-empty-line-before': 'always'|'never',

        // http://stylelint.io/user-guide/rules/custom-property-no-outside-root
        // TODO 'custom-property-no-outside-root': true,

        // http://stylelint.io/user-guide/rules/custom-property-pattern
        // TODO 'custom-property-pattern': string,


        // ===========================
        // ==== DECLARATION BLOCK ====
        // ===========================

        // Require a single space or disallow whitespace after the bang of declarations.
        // http://stylelint.io/user-guide/rules/declaration-bang-space-after
        'declaration-bang-space-after': 'never',

        // Require a single space or disallow whitespace before the bang of declarations.
        // http://stylelint.io/user-guide/rules/declaration-bang-space-before
        'declaration-bang-space-before': 'always',

        // Disallow duplicate properties within declaration blocks.
        // http://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/
        'declaration-block-no-duplicate-properties': true,

        // Disallow longhand properties that can be combined into one shorthand property.
        // http://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties
        'declaration-block-no-redundant-longhand-properties': true,

        // Disallow shorthand properties that override related longhand properties.
        // http://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides
        'declaration-block-no-shorthand-property-overrides': true,

        // http://stylelint.io/user-guide/rules/declaration-block-properties-order
        // DISABLED 'declaration-block-properties-order': 'alphabetical'|[],

        // Require a newline or disallow whitespace after the semicolons of declaration blocks.
        // http://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/
        'declaration-block-semicolon-newline-after': 'always',

        // Require a newline or disallow whitespace before the semicolons of declaration blocks.
        // http://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/
        'declaration-block-semicolon-newline-before': 'never-multi-line',

        // Require a single space or disallow whitespace after the semicolons of declaration blocks.
        // http://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/
        'declaration-block-semicolon-space-after': 'always-single-line',

        // Require a single space or disallow whitespace before the semicolons of declaration blocks.
        // http://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/
        'declaration-block-semicolon-space-before': 'never',

        // Limit the number of declaration within a single line declaration block.
        // http://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/
        'declaration-block-single-line-max-declarations': 1,

        // Require or disallow a trailing semicolon within declaration blocks.
        // http://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/
        'declaration-block-trailing-semicolon': 'always',


        // =====================
        // ==== DECLARATION ====
        // =====================

        // Require a newline or disallow whitespace after the colon of declarations.
        // http://stylelint.io/user-guide/rules/declaration-colon-newline-after
        'declaration-colon-newline-after': 'always-multi-line',

        // Require a single space or disallow whitespace after the colon of declarations.
        // http://stylelint.io/user-guide/rules/declaration-colon-space-after
        'declaration-colon-space-after': 'always-single-line',

        // Require a single space or disallow whitespace before the colon of declarations.
        // http://stylelint.io/user-guide/rules/declaration-colon-space-before
        'declaration-colon-space-before': 'never',

        // Require or disallow an empty line before declarations.
        // http://stylelint.io/user-guide/rules/declaration-empty-line-before
        'declaration-empty-line-before': ['never', { ignore: "after-declaration" }],

        // Disallow !important within declarations.
        // http://stylelint.io/user-guide/rules/declaration-no-important/
        'declaration-no-important': true,

        // Specify a blacklist of disallowed property and unit pairs within declarations.
        // http://stylelint.io/user-guide/rules/declaration-property-unit-blacklist
        'declaration-property-unit-blacklist': {},

        // Specify a whitelist of allowed property and unit pairs within declarations.
        // http://stylelint.io/user-guide/rules/declaration-property-unit-whitelist
        // DISABLED 'declaration-property-unit-whitelist': {},

        // Specify a blacklist of disallowed property and value pairs within declarations.
        // http://stylelint.io/user-guide/rules/declaration-property-value-blacklist
        // DISABLED 'declaration-property-value-blacklist': {},

        // Specify a whitelist of allowed property and value pairs within declarations.
        // http://stylelint.io/user-guide/rules/declaration-property-value-whitelist
        // DISABLED 'declaration-property-value-whitelist': {},

        // Specify whether or not quotation marks should be used around font family names.
        // http://stylelint.io/user-guide/rules/font-family-name-quotes/
        'font-family-name-quotes': 'always-unless-keyword',


        // ===============
        // ==== OTHER ====
        // ===============

        // Require numeric or named (where possible) font-weight values.
        // http://stylelint.io/user-guide/rules/font-weight-notation
        // TEMPORARY-DISABLED 'font-weight-notation': 'numeric'|'named',


        // ==================
        // ==== FUNCTION ====
        // ==================

        // Specify a blacklist of disallowed functions.
        // http://stylelint.io/user-guide/rules/function-blacklist
        'function-blacklist': [],

        // Disallow an unspaced operator within calc functions.
        // http://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator
        'function-calc-no-unspaced-operator': true,

        // Require a newline or disallow whitespace after the commas of functions.
        // http://stylelint.io/user-guide/rules/function-comma-newline-after
        'function-comma-newline-after': 'always-multi-line',

        // Require a newline or disallow whitespace before the commas of functions.
        // http://stylelint.io/user-guide/rules/function-comma-newline-before
        'function-comma-newline-before': 'never-multi-line',

        // Require a single space or disallow whitespace after the commas of functions.
        // http://stylelint.io/user-guide/rules/function-comma-space-after
        'function-comma-space-after': 'always-single-line',

        // Require a single space or disallow whitespace before the commas of functions.
        // http://stylelint.io/user-guide/rules/function-comma-space-before
        'function-comma-space-before': 'never',

        // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
        // http://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction
        'function-linear-gradient-no-nonstandard-direction': true,

        // Limit the number of adjacent empty lines within functions.
        // http://stylelint.io/user-guide/rules/function-max-empty-lines
        'function-max-empty-lines': 0,

        // Specify lowercase or uppercase for function names.
        // http://stylelint.io/user-guide/rules/function-name-case/
        'function-name-case': 'lower',

        // Require a newline or disallow whitespace on the inside of the parentheses of functions.
        // http://stylelint.io/user-guide/rules/function-parentheses-newline-inside
        'function-parentheses-newline-inside': 'always-multi-line',

        // Require a single space or disallow whitespace on the inside of the parentheses of functions.
        // http://stylelint.io/user-guide/rules/function-parentheses-space-inside
        'function-parentheses-space-inside': 'never',

        // Disallow scheme-relative urls.
        // http://stylelint.io/user-guide/rules/function-url-no-scheme-relative
        'function-url-no-scheme-relative': true,

        // Require or disallow quotes for urls.
        // http://stylelint.io/user-guide/rules/function-url-quotes
        'function-url-quotes': 'always',

        // Specify a whitelist of allowed url schemes.
        // http://stylelint.io/user-guide/rules/function-url-scheme-whitelist
        // DISABLED 'function-url-scheme-whitelist': string|[],

        // Specify a blacklist of allowed url schemes.
        // http://stylelint.io/user-guide/rules/function-url-scheme-whitelist
        'function-url-scheme-blacklist': "never",


        // Specify a whitelist of allowed functions
        // http://stylelint.io/user-guide/rules/function-whitelist
        // DISABLED 'function-whitelist': string|[],

        // Require or disallow whitespace after functions.
        // http://stylelint.io/user-guide/rules/function-whitespace-after
        'function-whitespace-after': 'always',


        // =========================
        // ==== GENERAL / SHEET ====
        // =========================

        // Specify indentation.
        // http://stylelint.io/user-guide/rules/indentation/
        'indentation': 4,

        // Disallow !important within keyframe declarations.
        // http://stylelint.io/user-guide/rules/keyframe-declaration-no-important
        'keyframe-declaration-no-important': true,

        // Disallow units for zero lengths.
        // http://stylelint.io/user-guide/rules/length-zero-no-unit/
        'length-zero-no-unit': true,

        // Limit the number of adjacent empty lines.
        // http://stylelint.io/user-guide/rules/max-empty-lines
        'max-empty-lines': 1,

        // Limit the length of a line.
        // http://stylelint.io/user-guide/rules/max-line-length
        'max-line-length': 120,

        // Disallow browser hacks that are irrelevant to the browsers you are targeting.
        // http://stylelint.io/user-guide/rules/no-browser-hacks
        // TODO Добавить stylelint-no-browser-hacks. Сейчас надо абсолютный путь прописывать до пакета https://github.com/ben-eb/stylehacks/issues/37
        //no-browser-hacks': true,

        // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
        // http://stylelint.io/user-guide/rules/no-descending-specificity
        // TODO 'no-descending-specificity': true,

        // Disallow duplicate selectors within a stylesheet.
        // http://stylelint.io/user-guide/rules/no-duplicate-selectors
        // TODO 'no-duplicate-selectors': true,

        // Disallow empty sources.
        // http://stylelint.io/user-guide/rules/no-empty-source
        'no-empty-source': true,

        // Disallow end-of-line whitespace.
        // http://stylelint.io/user-guide/rules/no-eol-whitespace
        'no-eol-whitespace': true,

        // Disallow extra semicolons.
        // http://stylelint.io/user-guide/rules/no-extra-semicolons
        'no-extra-semicolons': true,

        // Disallow colors that are suspiciously close to being identical.
        // http://stylelint.io/user-guide/rules/no-indistinguishable-colors
        // TODO 'no-indistinguishable-colors': true,

        // Disallow double-slash comments (//...) which are not supported by CSS and could lead to unexpected results.
        // http://stylelint.io/user-guide/rules/no-invalid-double-slash-comments
        // DISABLED 'no-invalid-double-slash-comments': true,

        // Disallow missing end-of-source newlines.
        // http://stylelint.io/user-guide/rules/no-missing-end-of-source-newline
        'no-missing-end-of-source-newline': true,

        // Disallow animation names that do not correspond to a @keyframes declaration.
        // http://stylelint.io/user-guide/rules/no-unknown-animations
        'no-unknown-animations': true,

        // =======================
        // ==== MEDIA FEATURE ====
        // =======================

        // Limit the allowed nesting depth.
        // http://stylelint.io/user-guide/rules/max-nesting-depth
        // TEMPORARY-DISABLED 'max-nesting-depth': int,

        // Require a single space or disallow whitespace after the colon in media features.
        // http://stylelint.io/user-guide/rules/media-feature-colon-space-after
        'media-feature-colon-space-after': 'always',

        // Require a single space or disallow whitespace before the colon in media features.
        // http://stylelint.io/user-guide/rules/media-feature-colon-space-before
        'media-feature-colon-space-before': 'never',

        // http://stylelint.io/user-guide/rules/media-feature-name-blacklist
        // TODO 'media-feature-name-blacklist': string|[],

        // http://stylelint.io/user-guide/rules/media-feature-name-case
        // TODO 'media-feature-name-case': 'lower'|'upper',

        // http://stylelint.io/user-guide/rules/media-feature-name-no-unknown
        // TODO 'media-feature-name-no-unknown': true,

        // http://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
        // TODO 'media-feature-name-no-vendor-prefix': true,

        // http://stylelint.io/user-guide/rules/media-feature-name-whitelist
        // TODO 'media-feature-name-whitelist': string|[],

        // http://stylelint.io/user-guide/rules/media-feature-no-missing-punctuation
        // TODO 'media-feature-no-missing-punctuation': true,

        // http://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside
        // TODO 'media-feature-parentheses-space-inside': 'always'|'never',

        // http://stylelint.io/user-guide/rules/media-feature-range-operator-space-after
        // TODO 'media-feature-range-operator-space-after': 'always'|'never',

        // http://stylelint.io/user-guide/rules/media-feature-range-operator-space-before
        // TODO 'media-feature-range-operator-space-before': 'always'|'never',


        // ==========================
        // ==== MEDIA QUERY LIST ====
        // ==========================

        // http://stylelint.io/user-guide/rules/media-query-list-comma-newline-after
        // TODO 'media-query-list-comma-newline-after': 'always'|'always-multi-line'|'never-multi-line',

        // http://stylelint.io/user-guide/rules/media-query-list-comma-newline-before
        // TODO 'media-query-list-comma-newline-before': 'always'|'always-multi-line'|'never-multi-line',

        // http://stylelint.io/user-guide/rules/media-query-list-comma-space-after
        // TODO 'media-query-list-comma-space-after': 'always'|'never'|'always-single-line'|'never-single-line',

        // http://stylelint.io/user-guide/rules/media-query-list-comma-space-before
        // TODO 'media-query-list-comma-space-before': 'always'|'never'|'always-single-line'|'never-single-line',


        // ================
        // ==== NUMBER ====
        // ================

        // Require or disallow a leading zero for fractional numbers less than 1.
        // http://stylelint.io/user-guide/rules/number-leading-zero/
        'number-leading-zero': 'always',

        // Limit the number of decimal places allowed in numbers.
        // http://stylelint.io/user-guide/rules/number-max-precision
        'number-max-precision': 4,

        // Disallow trailing zeros in numbers.
        // http://stylelint.io/user-guide/rules/number-no-trailing-zeros
        'number-no-trailing-zeros': true,


        // ==================
        // ==== PROPERTY ====
        // ==================

        // Specify a blacklist of disallowed properties.
        // http://stylelint.io/user-guide/rules/property-blacklist
        'property-blacklist': [],

        // Specify lowercase or uppercase for properties.
        // http://stylelint.io/user-guide/rules/property-case
        'property-case': 'lower',

        // Disallow unknown properties.
        // http://stylelint.io/user-guide/rules/property-no-unknown
        'property-no-unknown': [true, { ignoreProperties: ["/^ext-/", "custom"] }],

        // Disallow vendor prefixes for properties.
        // http://stylelint.io/user-guide/rules/property-no-vendor-prefix
        'property-no-vendor-prefix': true,

        // Specify a whitelist of allowed properties.
        // http://stylelint.io/user-guide/rules/property-whitelist
        // DISABLED 'property-whitelist': string|[],

        // Disallow standard properties inside :root rules.
        // http://stylelint.io/user-guide/rules/root-no-standard-properties
        // TODO 'root-no-standard-properties': true,


        // ===============
        // ==== RULES ====
        // ===============

        // Require or disallow an empty line before rules.
        // http://stylelint.io/user-guide/rules/rule-empty-line-before/
        'rule-empty-line-before': ['always-multi-line', { except: ['first-nested'], ignore: ["after-comment"] }],

        // Require or disallow an empty line before non-nested rules.
        // http://stylelint.io/user-guide/rules/rule-non-nested-empty-line-before/
        // 'rule-non-nested-empty-line-before': ['always-multi-line', { ignore: ["after-comment"] }],


        // ===================
        // ==== SELECTORS ====
        // ===================

        // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
        // http://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/
        'selector-attribute-brackets-space-inside': 'never',

        // Specify a blacklist of disallowed attribute operators.
        // http://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist
        'selector-attribute-operator-blacklist': [],

        // Require a single space or disallow whitespace after operators within attribute selectors.
        // http://stylelint.io/user-guide/rules/selector-attribute-operator-space-after
        'selector-attribute-operator-space-after': 'never',

        // Require a single space or disallow whitespace before operators within attribute selectors.
        // http://stylelint.io/user-guide/rules/selector-attribute-operator-space-before
        'selector-attribute-operator-space-before': 'never',

        // Specify a whitelist of allowed attribute operators.
        // http://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist
        // DISABLED 'selector-attribute-operator-whitelist': string|[],

        // Require or disallow quotes for attribute values.
        // http://stylelint.io/user-guide/rules/selector-attribute-quotes/
        'selector-attribute-quotes': 'always',

        // Specify a pattern for class selectors. Only lowercase kebab-case.
        // http://stylelint.io/user-guide/rules/selector-class-pattern/
        'selector-class-pattern': ['^[a-z][a-z0-9\-]*$', { resolveNestedSelectors: true, "message": "Use kebab-lower-case for class names (eg. some-class-name)" }],

        //Require a single space or disallow whitespace after the combinators of selectors.
        // http://stylelint.io/user-guide/rules/selector-combinator-space-after
        'selector-combinator-space-after': 'always',

        // Require a single space or disallow whitespace before the combinators of selectors.
        // http://stylelint.io/user-guide/rules/selector-combinator-space-before
        'selector-combinator-space-before': 'always',

        // Disallow non-space characters for descendant combinators of selectors.
        // http://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space
        'selector-descendant-combinator-no-non-space': true,

        // Specify a pattern for id selectors.
        // http://stylelint.io/user-guide/rules/selector-id-pattern
        // DISABLED 'selector-id-pattern': string,

        // Require a newline or disallow whitespace after the commas of selector lists.
        // http://stylelint.io/user-guide/rules/selector-list-comma-newline-after/
        'selector-list-comma-newline-after': 'always-multi-line',

        // Require a newline or disallow whitespace before the commas of selector lists.
        // http://stylelint.io/user-guide/rules/selector-list-comma-newline-before/
        'selector-list-comma-newline-before': 'never-multi-line',

        // Require a single space or disallow whitespace after the commas of selector lists.
        // http://stylelint.io/user-guide/rules/selector-list-comma-space-after/
        'selector-list-comma-space-after': 'always-single-line',

        // Require a single space or disallow whitespace before the commas of selector lists.
        // http://stylelint.io/user-guide/rules/selector-list-comma-space-before/
        'selector-list-comma-space-before': 'never',

        // Limit the number of adjacent empty lines within selectors.
        // http://stylelint.io/user-guide/rules/selector-max-empty-lines/
        'selector-max-empty-lines': 0,

        'selector-max-attribute': 0,

        'selector-max-combinators': 5,


        // Limit the number of compound selectors in a selector.
        // http://stylelint.io/user-guide/rules/selector-max-compound-selectors
        // DISABLED 'selector-max-compound-selectors': int,

        // Limit the specificity of selectors.
        // http://stylelint.io/user-guide/rules/selector-max-specificity
        // DISABLED 'selector-max-specificity': string,

        // Specify a pattern for the selectors of rules nested within rules.
        // http://stylelint.io/user-guide/rules/selector-nested-pattern
        // DISABLED 'selector-nested-pattern': string,

        // Disallow attribute selectors.
        // http://stylelint.io/user-guide/rules/selector-no-attribute
        // DISABLED 'selector-no-attribute': true,

        // Disallow combinators in selectors.
        // http://stylelint.io/user-guide/rules/selector-no-combinator
        // DISABLED 'selector-no-combinator': true,

        // Disallow id selectors.
        // http://stylelint.io/user-guide/rules/selector-no-id
        // DISABLED 'selector-no-id': true,

        // Disallow qualifying a selector by type.
        // http://stylelint.io/user-guide/rules/selector-no-qualifying-type
        // DISABLED 'selector-no-qualifying-type': true,

        // Disallow type selectors.
        // http://stylelint.io/user-guide/rules/selector-no-type
        // DISABLED 'selector-no-type': true,

        // Disallow the universal selector.
        // http://stylelint.io/user-guide/rules/selector-no-universal
        'selector-max-universal': 0,

        // Disallow vendor prefixes for selectors.
        // http://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
        'selector-no-vendor-prefix': true,

        // Specify a blacklist of disallowed pseudo-class selectors.
        // http://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist
        'selector-pseudo-class-blacklist': [],

        // Specify lowercase or uppercase for pseudo-class selectors.
        // http://stylelint.io/user-guide/rules/selector-pseudo-class-case/
        'selector-pseudo-class-case': 'lower',

        // Disallow unknown pseudo-class selectors.
        // http://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ["/^(local|global|export)$/", "string"] }],

        // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
        // http://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside
        'selector-pseudo-class-parentheses-space-inside': 'never',

        // Specify a whitelist of allowed pseudo-class selectors.
        // http://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist
        // DISABLED 'selector-pseudo-class-whitelist': string|[],

        // Specify lowercase or uppercase for pseudo-element selectors.
        // http://stylelint.io/user-guide/rules/selector-pseudo-element-case/
        'selector-pseudo-element-case': 'lower',

        // Specify single or double colon notation for applicable pseudo-elements.
        // http://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation
        'selector-pseudo-element-colon-notation': 'double',

        // Disallow unknown pseudo-element selectors.
        // http://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown
        'selector-pseudo-element-no-unknown': true,

        // Disallow the composition of :root in selectors.
        // http://stylelint.io/user-guide/rules/selector-root-no-composition
        // TODO 'selector-root-no-composition': true,

        // Specify lowercase or uppercase for type selectors.
        // http://stylelint.io/user-guide/rules/selector-type-case/
        'selector-type-case': 'lower',

        // Disallow unknown type selectors.
        // http://stylelint.io/user-guide/rules/selector-type-no-unknown
        'selector-type-no-unknown': true,

        // Disallow redundant values in shorthand properties.
        // http://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
        'shorthand-property-no-redundant-values': true,

        // Disallow (unescaped) newlines in strings.
        // http://stylelint.io/user-guide/rules/string-no-newline
        'string-no-newline': true,

        // Specify single or double quotes around strings.
        // http://stylelint.io/user-guide/rules/string-quotes/
        'string-quotes': 'double',

        // Specify the minimum number of milliseconds for time values.
        // https://stylelint.io/user-guide/rules/time-min-milliseconds/
        'time-min-milliseconds': 100,


        // ===============
        // ==== UNITS ====
        // ===============

        // Specify a blacklist of disallowed units.
        // http://stylelint.io/user-guide/rules/unit-blacklist
        'unit-blacklist': [],

        // Specify lowercase or uppercase for units.
        // http://stylelint.io/user-guide/rules/unit-case/
        'unit-case': 'lower',

        //Disallow unknown units.
        // http://stylelint.io/user-guide/rules/unit-no-unknown/
        'unit-no-unknown': true,

        // Specify a whitelist of allowed units.
        // http://stylelint.io/user-guide/rules/unit-whitelist
        // TODO 'unit-whitelist': string|[],

        // Specify lowercase or uppercase for keywords values.
        // http://stylelint.io/user-guide/rules/value-keyword-case
        'value-keyword-case': 'lower',

        // Require a newline or disallow whitespace after the commas of value lists.
        // http://stylelint.io/user-guide/rules/value-list-comma-newline-after
        'value-list-comma-newline-after': 'always-multi-line',

        // Require a newline or disallow whitespace before the commas of value lists.
        // http://stylelint.io/user-guide/rules/value-list-comma-newline-before
        'value-list-comma-newline-before': 'never-multi-line',

        // Require a single space or disallow whitespace after the commas of value lists.
        // http://stylelint.io/user-guide/rules/value-list-comma-space-after
        'value-list-comma-space-after': 'always-single-line',

        // Require a single space or disallow whitespace before the commas of value lists.
        // http://stylelint.io/user-guide/rules/value-list-comma-space-before
        'value-list-comma-space-before': 'never',

        // Limit the number of adjacent empty lines within value lists.
        // http://stylelint.io/user-guide/rules/value-list-max-empty-lines
        'value-list-max-empty-lines': 0,

        // Disallow vendor prefixes for values.
        // http://stylelint.io/user-guide/rules/value-no-vendor-prefix
        'value-no-vendor-prefix': true
    }
};
