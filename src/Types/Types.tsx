/**
 * =========================User=========================
 */
export type UserResp = {
    code: 200 | 500,
    msg: string
    data: UserInfo[],

}
export type UserInfo = {
    name: string,
    status: 0|1|2,
    group: string,
    score: number,
    is_admin: 0|1,
}
