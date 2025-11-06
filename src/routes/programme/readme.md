h1 : Semaine du 27 octobre 2025, 3 événements

grid
row -> en-tête (amphi A, etc.)
row -> événement

https://www.w3.org/WAI/ARIA/apg/patterns/grid/

- mercredi :
  - 9
  - 10
  - 12
  - 13:30
  - 15:30
  - 16
  - 18
- jeudi :
  - 8:30
  - 10:30
  - 11:30
  - 12:30
  - 13:30
  - 14:30
  - 15:30
  - 16
  - 17
  - 17:30
  - 18
  - 18:50 (!!)
- vendredi
  - pareil que jeudi mais fin à 17h

## TODO

### html

- [x] The grid container has role grid.
- [ ] Each row container has role row and is either a DOM descendant of or owned by the grid element or an element with role rowgroup.
- [ ] Each cell is either a DOM descendant of or owned by a row element and has one of the following roles:
  - [ ] columnheader if the cell contains a title or header information for the column.
  - [ ] rowheader if the cell contains title or header information for the row.
  - [ ] gridcell if the cell does not contain column or row header information.
- [ ] If there is an element in the user interface that serves as a label for the grid, aria-labelledby is set on the grid element with a value that refers to the labelling element. Otherwise, a label is specified for the grid element using aria-label.
- [ ] If the grid has a caption or description, aria-describedby is set on the grid element with a value referring to the element containing the description.
- [ ] If the grid provides sort functions, aria-sort is set to an appropriate value on the header cell element for the sorted column or row as described in the Grid and Table Properties Practice.
- [ ] If the grid supports selection, when a cell or row is selected, the selected element has aria-selected set true. If the grid supports column selection and a column is selected, all cells in the column have aria-selected set to true.
- [ ] If the grid provides content editing functionality and contains cells that may have edit capabilities disabled in certain conditions, aria-readonly may be set true on cells where editing is disabled. If edit functions are disabled for all cells, aria-readonly may be set true on the grid element. Grids that do not provide editing functions do not include the aria-readonly attribute on any of their elements.
- [ ] If there are conditions where some rows or columns are hidden or not present in the DOM, e.g., data is dynamically loaded when scrolling or the grid provides functions for hiding rows or columns, the following properties are applied as described in the Grid and Table Properties Practice.
  - [ ] aria-colcount or aria-rowcount is set to the total number of columns or rows, respectively.
  - [ ] aria-colindex or aria-rowindex is set to the position of a cell within a row or column, respectively.
- [ ] If the grid includes cells that span multiple rows or multiple columns, and if the grid role is NOT applied to an HTML table element, then aria-rowspan or aria-colspan is applied as described in the Grid and Table Properties Practice.

### grid navigation

- Right Arrow: Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.
- Left Arrow: Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.
- Down Arrow: Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.
- Up Arrow: Moves focus one cell up. If focus is on the top cell in the column, focus does not move.
- Page Down: Moves focus down an author-determined number of rows, typically scrolling so the bottom row in the currently visible set of rows becomes one of the first visible rows. If focus is in the last row of the grid, focus does not move.
- Page Up: Moves focus up an author-determined number of rows, typically scrolling so the top row in the currently visible set of rows becomes one of the last visible rows. If focus is in the first row of the grid, focus does not move.
- Home: moves focus to the first cell in the row that contains focus.
- End: moves focus to the last cell in the row that contains focus.
- Control + Home: moves focus to the first cell in the first row.
- Control + End: moves focus to the last cell in the last row.

### extra navigation

- Control + Space: selects the column that contains the focus.
- Shift + Space: Selects the row that contains the focus. If the grid includes a column with checkboxes for selecting rows, this key can serve as a shortcut for checking the box when focus is not on the checkbox.
- Control + A: Selects all cells.
- Shift + Right Arrow: Extends selection one cell to the right.
- Shift + Left Arrow: Extends selection one cell to the left.
- Shift + Down Arrow: Extends selection one cell down.
- Shift + Up Arrow: Extends selection one cell up.
