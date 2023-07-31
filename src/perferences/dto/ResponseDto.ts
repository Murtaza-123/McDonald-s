import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ResponseDto{
    @ApiProperty({description: "This is a response header"})
    @IsString()
    message: string;
}