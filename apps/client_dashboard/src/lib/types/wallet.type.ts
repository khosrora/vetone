export enum WalletTypeEnum {
  D = "D",
  C = "C",
}

export type WalletType = {
  amount: string;
  created_at: string;
  date: string;
  description: string;
  id: number;
  is_active: boolean;
  type: WalletTypeEnum;
  updated_at: string;
  wallet: number;
};
