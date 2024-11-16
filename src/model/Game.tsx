interface Game {
    groupName: string;
    mafiaCount: number;
    citizenCount: number;
    token?: string;
    localDateTime?: Date;
    members: Member[] | undefined
    state: "REGISTRATION" | "SHARE_LINK";
}

interface Member {
    fullName: string;
    role: "MAFIA" | "GOD" | "CITIZEN" | "DOCTOR" | "POLICE";
    status: "INIT" | "STARTED" | "REMOVED"
}

export default Game;