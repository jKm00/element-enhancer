CSS Variables:

- Main color, secondary color
  - Use those mainly to set other Variables
- Keep variables like: borderColor, borderStyle, but should not
  need to be updated, unless user wants something thats not the default

For the docs:

- Explain
  - 2 levels of changing elements globally:
    1. The theme, color, font...
    2. The style, more specific, border-style, special border-color, shadows...

1. To change the theme:

- Change most abstract css variables: main color, secondary color

2. To change style:

- More detail css variables has to be changes: borderColor, borderStyle

_**Note:** More detailed should be specified last so they overwrite the abstract once_

- Same two levels described above can also be used to change elements individually?
  _Need to check this out, if it works like im thinking_
