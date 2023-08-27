import dayjs from "dayjs";

function formatCurrency(amount: number): string {
  if (!amount) return "";
  const amountString: string = amount.toString();

  const amountArray: string[] = amountString.split(".");
  const amountInt: string = amountArray[0];
  const amountDecimal: string = amountArray[1];

  if (amountInt.length <= 3) return `$${amountString}`;

  const formatArray = [];

  for (let i = 0; i < amountInt.length; i++) {
    formatArray.push(amountInt[i]);
    if (i === amountInt.length - 1) {
      break;
    }

    if ((amountInt.length - 1 - i) % 3 === 0) {
      formatArray.push(",");
    }
  }

  if (amountDecimal) return `$${formatArray.join("")}.${amountDecimal}`;
  return `$${formatArray.join("")}`;
}

function formatDate(date: Date, format?: string): string {
  if (!dayjs(date).isValid()) return "";
  return dayjs(date).format(format || "YYYY-MM-DD");
}

function createArray(length: number) {
  return Array.from({ length }, (_, i) => i + 1);
}

export { formatCurrency, formatDate, createArray };
