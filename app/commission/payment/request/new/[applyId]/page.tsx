"use client";

import { useState } from "react";

import { Button, TextField } from "@mui/material";

const CommissionNewPaymentRequestPage = ({ params }: { params: { applyId: string } }) => {
    const applyId = params.applyId; // 신청한 uuid

    const [form, setForm] = useState({
        applyId: applyId,
        applyTitle: "",
        discussion: "",
        price: "",
    });

    const onSubmit = async () => {
        const resp = await fetch(process.env.NEXT_PUBLIC_DOMAIN_URL + "/api/commission/payment/request", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        const data = await resp.json() as ApiResult<number>;

        if(data.status === '200') {
            alert('결제 요청이 완료되었습니다.');   
        }
    }

    return (
        <div className="p-10">
            <h1 className="py-3 font-bold text-2xl">결제 요청 신규 생성</h1>
            <p className="py-3 font-bold text-lg">결제 요청할 신청서 id: {params.applyId}</p>
            <div className="mb-4">
                <TextField
                    label="신청서 제목"
                    variant="outlined"
                    fullWidth
                    type="email"
                    className="mb-4"
                    value={form.applyTitle}
                    onChange={(e) => setForm({ ...form, applyTitle: e.target.value })}
                />
            </div>
            <div className="mb-4">
                <TextField
                    label="요청금액"
                    variant="outlined"
                    fullWidth
                    type="text"
                    className="mb-4"
                    rows={5}
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
            </div>
            <div className="mb-4">
                <TextField
                    label="협의사항"
                    variant="outlined"
                    fullWidth
                    type="text"
                    className="mb-4"
                    rows={5}
                    value={form.discussion}
                    onChange={(e) => setForm({ ...form, discussion: e.target.value })}
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}
            > 결제 요청하기
            </Button>
        </div>
    );
}

export default CommissionNewPaymentRequestPage;