import shell from "shelljs";

export default function execCmd(cmd: string, errorText: string) {
    // NOTE: Shelljs exec remove the output's styling of the original commands
    if (shell.exec(cmd).code !== 0) {
        shell.echo("error: ", errorText);
        shell.exit(1);
    }
}
