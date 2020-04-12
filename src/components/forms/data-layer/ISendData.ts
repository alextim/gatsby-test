export interface ISendData {
  onSend: () => void;
  onSuccess: () => void;
  onCancel: () => void;
  onError: (error: any) => void;

  send: (data: any) => void;
  cancel: () => void;
}