import Image from 'next/image';

interface CommissionApplyDetailProps {
    data: CommissionApply;
}

const CommissionApplyDetail = ({ data }: CommissionApplyDetailProps) => {
    return <>
        <h1>커미션 신청 상세</h1>
        <div>
            <div>
                <label>Id</label>
                <span>{data.id}</span>
            </div>
            <div>
                <label>User Name</label>
                <span>{data.userName}</span>
            </div>
            <div>
                <label>User Email</label>
                <span>{data.userEmail}</span>
            </div>
            <div>
                <label>Title</label>
                <span>{data.title}</span>
            </div>
            <div>
                <label>Status</label>
                <span>{data.status}</span>
            </div>
            <div>
                <label>Register Date</label>
                <span>{data.rgtrDt}</span>
            </div>
            {
                data.applyFileList.length > 0 && data.applyFileList.map((file, index) => (
                    <div key={index}>
                        <Image src={file.fileUrl} alt="file" width={200} height={200} />
                    </div>
                ))
            }
        </div>
    </>
};

export default CommissionApplyDetail;