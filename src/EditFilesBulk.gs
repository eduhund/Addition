/**
 * Makes a set of changes in every file in a folder
 * @param {String} folderId Folder ID with files to be edited, mandatory
 * @param {Object} edits Array of edits to introduce to every file. An array should contain objects with fields: {sheet, cell, type, value}, as descriped in {EditFiles}; mandatory
 * @return {Object} Execution outcome (ok or error) with details
 */
function EditFilesBulk(folderId, edits) {
  if (!edits || !edits.length) {
    return {outcome: "error", errorMessage: "Edits should be a non-empty array"};
  }
  var editsErrors = [];

  for (var i = 0; i < edits.length; i++) {
    if (!edits[i].sheet) { editErrors.push(`edits[${i}] does not contain sheet property`); }
    if (!edits[i].cell) { editErrors.push(`edits[${i}] does not contain cell property`); }
    if (!edits[i].value) { editErrors.push(`edits[${i}] does not contain value property`); }
  }

  if (editsErrors.length) {
    return {outcome: "error", errorMessage: "Edits list is not valid", errors: editsErrors};
  }

  return EditFilesManual(folderId, (spreadSheet) => {
    for (var edit of edits) {
      var sheet = (typeof edit.sheet === 'number')
        ? spreadSheet.getSheets()[edit.sheet - 1]
        : spreadSheet.getSheetByName(edit.sheet);

      var cell = sheet.getRange(edit.cell);
      if (edit.type === 'formula') {
        cell.setFormula(edit.value);
      } else {
        cell.setValue(edit.value);
      }
    }
  });
}
