import { FileValidator, Injectable } from '@nestjs/common';

@Injectable()
export class FileValidation extends FileValidator<any> {
  private errorMessageObj = {
    size: 'Size should be lower than 10mb',
    ext: `Extension aren't supported`,
  };

  private err: string;

  constructor(props) {
    super(props);
  }

  isValid(file?: Express.Multer.File): boolean | Promise<boolean> {
    this.err = '';
    if (file.size > 10485760) this.err = 'size';
    else if (!/\/(pdf)$/i.test(file.mimetype)) this.err = 'ext';
    return this.err.length === 0;
  }

  buildErrorMessage(file: any): string {
    return this.errorMessageObj[this.err];
  }
}
