import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { EditUserPermissionsModalComponent } from './edit-user-permissions-modal.component';
import { CreateOrEditUserModalComponent } from './create-or-edit-user-modal.component';
import { ImpersonationService } from '@app/admin/users/impersonation.service';
import { DynamicEntityPropertyManagerModule } from '@app/shared/common/dynamic-entity-property-manager/dynamic-entity-property-manager.module';
import { UploadFileComponent } from './upload-file/upload-file.component';
// import { ScrollPanelModule } from 'primeng/scrollpanel';
@NgModule({
    declarations: [UsersComponent, EditUserPermissionsModalComponent, CreateOrEditUserModalComponent, UploadFileComponent],
    imports: [AppSharedModule, AdminSharedModule, UsersRoutingModule, DynamicEntityPropertyManagerModule],
    providers: [ImpersonationService],
})
export class UsersModule {}
