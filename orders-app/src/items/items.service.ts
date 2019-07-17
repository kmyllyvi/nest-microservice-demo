import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { Item } from 'src/items/models/item.model';

@Injectable()
export class ItemsService extends BaseService<Item> {
  // constructor(
  //     @InjectModel(Item.modelName) private readonly _itemModel: ModelType<Item>,
  //     private readonly _mapperService: MapperService,
  // ) {
  //     super();
  //     this._model = _itemModel;
  //     this._mapper = _mapperService.mapper;
  // }
}
