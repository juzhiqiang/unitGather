// 钱格式化分割符
export const formatMoney = (money: number): string => {
  return money.toLocaleString()
    ? money.toLocaleString()
    : String(money).replace(
        new RegExp(
          `(?!^)(?=(\\d{3})+${String(money).includes(".") ? "\\." : "$"})`,
          "g"
        ),
        ","
      );
};
