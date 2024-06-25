/**
 * Makes one change in every file in a folder
 * @param {String} folderId Folder ID with files to be edited, mandatory
 * @param {Object} sheet Either name of the sheet (String) or number of the sheet (number, starting with 1); mandatory
 * @param {String} cell Cell address in A1 format, mandatory
 * @param {String} type Type of the value; use 'formula' for formulas, leave empty for plain value; optional (plain value by default)
 * @param {Object} value New value for the cell; either string or number; mandatory
 * @return {Object} Execution outcome (ok or error) with details
 */
function EditFiles(folderId, sheet, cell, type, value) {
  var editsErrors = [];

  if (!sheet) { editErrors.push(`sheet cannot be empty`); }
  if (!cell) { editErrors.push(`cell cannot be empty`); }
  if (!value) { editErrors.push(`value cannot be empty`); }

  if (editsErrors.length) {
    return {outcome: "error", errorMessage: "Edits list is not valid", errors: editsErrors};
  }

  return EditFilesBulk(folderId, [{sheet, cell, type, value}]);
}