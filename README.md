# Mygom.Tech qualification task:

Dropdown component from scratch using React and Typescript

To check component run `npm start`

### App consists:
- Data option selection (mock data of valid / invalid formats). Select desired option to see dropdown result.
- Selected data preview in raw format.
- Dropdown component which renders validated and formated data.
- Multiple data selection can be removed by re-clicking selected option or by clicking on chip indropdown header. 

## Added / used
- No third-party libraries used
- `<select>` attribute not used
- Dropdown supports multiple selection
- Dropdown reusable in many places
- onSelect callback implemented
- StyledComponents used
- Dropdown options can be grouped
- Custom hook for dropdown data validation added

## Coding standards
- ES6
- Typescript
- Standard CRA Eslint rules followed
- All components written as functional components

## Naming conventions
- Component's names should be written using pascal case. i.e. `Dropdown.tsx`, `DropdownItem.tsx`
- Non-components should be written using camel case. i.e. `myUtilityFile.ts`

## Project structure
- `/components` - catalog holds all React components that are used at least twice in the project.
- `/utils` - when global utilities are needed they go into this catalog.
- `/utils/hooks` - when global hooks are needed they go into sub-catalog of `/utils`
