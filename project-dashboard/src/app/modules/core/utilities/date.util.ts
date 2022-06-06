import * as moment from 'moment';

export class DateUtility {
  public static getDate(str: string): string {
    return moment(str).format('M.D.YYYY');
  }
}
