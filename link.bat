cd ../angular/dist/packages-dist/forms
call npm pack --no-package-lock
cd ../core
call npm pack --no-package-lock
cd ../compiler
call npm pack --no-package-lock
cd ../compiler-cli
call npm pack --no-package-lock

cd ../../../../my-app

move ..\angular\dist\packages-dist\core\angular-core-13.0.0-next.7.tgz angular-core-13.0.0-next.7.tgz 
move ..\angular\dist\packages-dist\forms\angular-forms-13.0.0-next.7.tgz angular-forms-13.0.0-next.7.tgz
move ..\angular\dist\packages-dist\compiler\angular-compiler-13.0.0-next.7.tgz angular-compiler-13.0.0-next.7.tgz
move ..\angular\dist\packages-dist\compiler-cli\angular-compiler-cli-13.0.0-next.7.tgz angular-compiler-cli-13.0.0-next.7.tgz

call npm install angular-core-13.0.0-next.7.tgz angular-forms-13.0.0-next.7.tgz angular-compiler-13.0.0-next.7.tgz angular-compiler-cli-13.0.0-next.7.tgz



