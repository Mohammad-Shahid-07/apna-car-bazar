"use server";
export async function passActions(pass: string) {
  const realPass = process.env.PASSWORD;
  if (pass === realPass) {
    return true;
  } else {
    return false;
  }
}
