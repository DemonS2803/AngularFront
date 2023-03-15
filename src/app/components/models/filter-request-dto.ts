export class FilterRequestDto {
  reg_num: string = "";
  birthday: string;
  fio: string;
  pol: string;


  constructor(reg_num: string,
              birthday: string,
              fio: string,
              pol: string) {
    this.reg_num = reg_num;
    this.pol = pol;
    this.fio = fio;
    this.birthday = birthday;

  }
}
