export const nationalCodeValidation = (meli_code?: string) => {
  if (!meli_code) {
    return {
      status: false,
      message: "لطفا شماره ملی بیمار را وارد کنید",
    };
  }
  let c, r, n;
  if ((meli_code.length < 12 && meli_code.length > 10) || meli_code.length < 10) {
    return {
      status: false,
      message: "طول شماره ملی وارد شده معتبر نیست.",
    };
  }
  if (meli_code.length === 12) {
    return {
      status: true,
      message: "",
    };
  }
  if (meli_code.length === 10) {
    if (meli_code === "0000000000") {
      return {
        status: false,
        message: "ساختار شماره ملی وارد شده معتبر نیست.",
      };
    } else {
      c = parseInt(meli_code.charAt(9));
      n =
        parseInt(meli_code.charAt(0)) * 10 +
        parseInt(meli_code.charAt(1)) * 9 +
        parseInt(meli_code.charAt(2)) * 8 +
        parseInt(meli_code.charAt(3)) * 7 +
        parseInt(meli_code.charAt(4)) * 6 +
        parseInt(meli_code.charAt(5)) * 5 +
        parseInt(meli_code.charAt(6)) * 4 +
        parseInt(meli_code.charAt(7)) * 3 +
        parseInt(meli_code.charAt(8)) * 2;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      r = n - parseInt(n / 11) * 11;

      if ((r === 0 && r === c) || (r === 1 && c === 1) || (r > 1 && c === 11 - r)) {
        return {
          status: true,
          message: "شماره ملی وارد شده معتبر می باشد.",
          nationalCode: meli_code,
        };
      } else {
        return {
          status: false,
          message: "شماره ملی وارد شده معتبر نیست.",
        };
      }
    }
  } else if (meli_code.length === 0) {
    return {
      status: false,
      message: "لطفا شماره ملی بیمار را وارد نمایید.",
    };
  } else {
    return {
      status: false,
      message: "طول شماره ملی وارد شده معتبر نیست",
    };
  }
};
