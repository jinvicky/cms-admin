
import CommissionApplyList from "./CommissionApplyList";

const CommissionApplyListPage = async () => {
    const resp = await fetch(process.env.NEXT_DOMAIN_URL + "/api/commission/apply");
    const data = await resp.json() as ApiResult<CommissionApply[]>;

    return <>
        <CommissionApplyList rowData={data.data} />
    </>
};

export default CommissionApplyListPage;
