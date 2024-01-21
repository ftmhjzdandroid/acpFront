type MessageModel = {
  type?: "E" | "W" | "I" | "S";
  text?: string;
}[];

export const messegesHandle = (resultMessage: MessageModel) => {
  const errMessages = resultMessage && resultMessage.filter(msg => msg.type === "E");
  const infoMessages = resultMessage && resultMessage.filter(msg => msg.type === "I");
  const warningMessages = resultMessage && resultMessage.filter(msg => msg.type === "W");
  return {
    errorMsgLenght: errMessages?.length ?? 0,
    errorMsgText: errMessages?.map(msg => msg.text),
    errorTitle: "خطا",
    infoMsgLenght: infoMessages?.length ?? 0,
    infoMsgText: infoMessages?.map(msg => msg.text),
    infoTitle: "پیام",
    warningMsgLenght: warningMessages?.length ?? 0,
    warningMsgText: warningMessages?.map(msg => msg.text),
    warningTitle: "هشدار",
  };
};
