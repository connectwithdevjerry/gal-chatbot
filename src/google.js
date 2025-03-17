import { gapi } from "gapi-script";

export const writeToSheet = async () => {
  const range = "Sheet1!A1"; // Modify based on where you want to insert data
  const values = [Object.keys(userResponses), Object.values(userResponses)];

  const params = {
    spreadsheetId: "1QMPXEt75esd5ksD5eHja8dKdvBfeFQjA6z5qp-ed2Ws",
    range: range,
    valueInputOption: "RAW",
  };

  const body = {
    values: values,
  };

  try {
    const response = await gapi.client.sheets.spreadsheets.values.update({
      ...params,
      resource: body,
    });

    console.log("Data written successfully:", response);
  } catch (error) {
    console.error("Error writing to Google Sheets:", error);
  }
};
