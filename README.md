# Mygom.Tech qualification task:

Create dropdown component from scratch using React and Typescript

## Requirements
- No third-party libraries used
- `<select>` attribute not used
- Dropdown supports multiple selection
- Dropdown reusable in many places
- onSelect callback implemented
- StyledComponents used

## Additional points
- Dropdown options can be grouped
- Custom hook for dropdown data validation added
- Storybook implemented

## Coding standards
- ES6
- Typescript
- Standard CRA Eslint rules must be followed
- All components must be written as functional components instead of Class components

## Naming conventions
- Component's names should be written using pascal case. i.e. `Dropdown.tsx`, `DropdownItem.tsx`
- Non-components should be written using camel case. i.e. `myUtilityFile.ts`
- Component story files should use the same name as its corresponding file. i.e. `Dropdown.stories.tsx`

## Project structure
- `/components` - catalog holds all React components that are used at least twice in the project.
- `/utils` - when global utilities are needed they go into this catalog.
- `/utils/hooks` - when global hooks are needed they go into sub-catalog of `/utils`
