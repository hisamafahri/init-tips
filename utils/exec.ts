import shell from "shelljs";

export default function execCmd(cmd: string, errorText: string) {
    // HACK: Shelljs exec remove the output's styling of the original commands
    // TODO: Exec command asynchronously
    // TODO: Silent command execution
    if (shell.exec(cmd).code !== 0) {
        shell.echo("error: ", errorText);
        shell.exit(1);
    }
}
