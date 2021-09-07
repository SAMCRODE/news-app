import { Row } from "./Row";
import { User } from "./User";

export interface New {
    Id?: number;
    Name?: string;
    Description?: string;
    CategoryName?: string;
    ImageUrl?: string;
    BackgroundColor?: string;
    ShowNumber?: number;
    CreateDate?: Date;
    AuthorId?: number;
    Author?: User;
    Rows?: Row[];
}