export class Matrix {
  constructor(obj) {
    this.input = obj
  }

  get rows() {
    return this.input.split('\n').map(row => row.split(' ').map(Number));
  }

  get columns() {
    return this.rows[0].map((_, c) => this.rows.map(r => r[c]));
  }  
}