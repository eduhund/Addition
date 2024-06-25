/**
 * Allows manual manipulation for every file in a folder
 * @param {String} folderId Folder ID with files to be edited, mandatory
 * @param {function} editor A function to process a spreadsheet with a single parameter: {Spreadsheet}; mandatory
 * @return {Object} Execution outcome (ok or error) with details
 */
function EditFilesManual(folderId, editor) {
  if (!editor || typeof editor !== 'function') {
    return {outcome: "error", errorMessage: "Editor should be a function"};
  }

  var sfl = DriveApp.getFolderById(folderId);
  if (!sfl) {
    return {outcome: "error", errorMessage: "Source folder not found"};
  }

  try {

    var files = sfl.getFiles();

    while (files.hasNext()) {
      var file = files.next();
      var spreadSheet = SpreadsheetApp.open(file);

      editor(spreadSheet);
    }
  } catch (e) {
    return {outcome: "error", error: e};
  }

  return { outcome: "ok", message: "Files changed successfully" };

}
