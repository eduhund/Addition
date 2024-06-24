# Eddition

![Eddition](https://github.com/eduhund/Eddition/assets/141957200/993ddf7c-b8e1-4a70-8372-90da051ccbe7)

### About 
[Eddition](https://script.google.com/a/macros/sobakapav.com/library/d/1OwaVl6r1f1dHlsVwDTY0Cfa1cmiM5iMn31rrMtY3rkHS6vTnMwvswSf0/3) is a script that edits Google spreadsheets (the required number, in the desired folder, the same or with the necessary changes).

### Eddition helps you to:

- save time;
- increase productivity;
- automate document creation.

### What problems Eddition solves:

If you have an array of identical documents, Eddition will help you correct a systematic typo in all documents or make the same change (recolor a column, for example).

### Who are the users?

Everyone who somehow intersects with Google Sheets in their work.

### How Eddition works?

1. Open [Google Apps Scripts](https://script.google.com/) page.
2. Create a new project (or use an existing one), open it.
3. In the left panel, select "Libraries - Add Library".
4. Google will ask for an identification code (Script ID). Enter this one: 1OwaVl6r1f1dHlsVwDTY0Cfa1cmiM5iMn31rrMtY3rkHS6vTnMwvswSf0.
5. Call the functions of this library from your script. There are three functions:

#### The ability to correct one specific cell

function TryEditFiles(){
  var result;

  result = Eddition.EditFiles('1Fxewp7dryqcgT_fmv08UQc76RaQpZF8G', 1, 'A2', null, 12);

  Logger.log(result);
}

#### The ability to correct several cells

function TryEditFilesBulk(){
  var result;

  var edits = [
    {sheet: 1, cell: 'A4', value: 'ASDFG'},
    {sheet: 'Sheet2', cell: 'B2', type: 'formula', value: '=Sheet1!A4'}
  ];

  result = Eddition.EditFilesBulk('1Fxewp7dryqcgT_fmv08UQc76RaQpZF8G', edits);

  Logger.log(result);
}

#### The ability to insert your own formula into a cell

function TryEditFilesManual(){
  var result;

  result = Eddition.EditFilesManual('1Fxewp7dryqcgT_fmv08UQc76RaQpZF8G', (spreadsheet) => {
    const range = spreadsheet.getSheetByName('Sheet1').getRange('B2');
    range.setValue('Mechanical');
    range.setBackground('green');
  });

  Logger.log(result);
}

For more details please check our [Instruction](https://docs.google.com/document/d/1SgXgcQzQOdeKYKZjJiobHjRgyN1I9dum2Nexrzwff8Q/edit).

### Pre-requisites

To use this script, you will need to have a Google account.

### Support & Donation

Our team creates fully open-source tools and solutions for developers, designers, and those who teach these subjects. You can help us: share this tool, contribute to it, or donate to us to support future work. 

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?hosted_button_id=7Z9A2PABQU584)

