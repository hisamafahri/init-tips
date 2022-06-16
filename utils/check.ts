import shell from "shelljs";

export function isDirExist(name: string) {
    if (shell.cd(name).code !== 0) {
        return false;
    }

    return true;
}
