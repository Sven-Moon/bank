import { AccountsModule } from "./modules/accounts/accounts.module";
import { AuthModule } from "./modules/auth/auth.module";
import { PagesModule } from "./modules/pages/pages.module";
import { SharedModule } from "./shared/shared.module";

export const AppModules = [
  AuthModule,
  SharedModule,
  PagesModule,
  AccountsModule
]
