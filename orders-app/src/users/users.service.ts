import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { User } from 'src/users/models/user.model';

@Injectable()
export class UsersService extends BaseService<User> {
  // constructor(
  //     @InjectModel(User.modelName) private readonly _userModel: ModelType<User>,
  //     private readonly _mapperService: MapperService,
  // ) {
  //     super();
  //     this._model = _userModel;
  //     this._mapper = _mapperService.mapper;
  // }
}
