export interface IChild {
  children: React.ReactNode;
}

export interface IButtonProps {
  text: string;
  onClick?: () => void;
  classes?: string;
  isLoad?: boolean;
  aria?: string;
  isLoader?: string;
}

export interface IStack {
  id: number;
  img: string;
  name: string;
  desc: string;
}
