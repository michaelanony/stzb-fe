/**
 * =========================User=========================
 */
export type UserResp = {
    code: 200 | 500,
    msg: string
    data: MemberResp,

}
export type MemberResp = {
    members:UserInfo[],
    total_members:number,
    start_page:number,
    end_page:number,
}
export type UserInfo = {
    name: string,
    status: 0|1|2,
    group: string,
    score: number,
    is_admin: 0|1,
}
