import CommissionApplyDetail from "./CommissionApplyDetail";


const CommissionApplyDetailPage = async ({ params }: { params: { uuid: string } }) => {
    const uuid = params.uuid;
    const resp = await fetch(process.env.NEXT_DOMAIN_URL + `/api/commission/apply/${uuid}`);
    const data = await resp.json() as ApiResult<CommissionApply>;

    return (
        <div>
            <CommissionApplyDetail data={data.data} />
        </div>
    );
};

export default CommissionApplyDetailPage;
