import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck, ShoppingCart, Truck, AlertCircle } from 'lucide-react';

export default function StoreLinks() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [deliveryType, setDeliveryType] = useState('home');
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const bookPrice = 1200;
  const deliveryPrices = {
    home: 700,
    office: 400
  };

  const deliveryPrice = deliveryPrices[deliveryType];
  const totalPrice = (bookPrice * quantity) + deliveryPrice;

  const handleOrder = (e) => {
    e.preventDefault();
    if (!fullName || !phone || !wilaya) {
      setError('يرجى ملء جميع الحقول المطلوبة.');
      return;
    }
    if (phone.length < 9) {
      setError('يرجى إدخال رقم هاتف صالح.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const wilayas = [
    'الجزائر (Algiers)', 'وهران (Oran)', 'قسنطينة (Constantine)', 'سطيف (Setif)', 
    'البليدة (Blida)', 'عنابة (Annaba)', 'باتنة (Batna)', 'تيزي وزو (Tizi Ouzou)', 
    'بجاية (Bejaia)', 'تلمسان (Tlemcen)', 'سيدي بلعباس (Sidi Bel Abbes)', 'الشلف (Chlef)',
    'بسكرة (Biskra)', 'جيجل (Jijel)', 'ورقلة (Ouargla)', 'غرداية (Ghardaia)',
    'المسيلة (M\'sila)', 'سكيكدة (Skikda)', 'برج بوعريريج (Bordj Bou Arreridj)', 'ولاية أخرى (Other)'
  ];

  return (
    <section id="purchase" className="relative py-24 bg-white overflow-hidden border-b border-slate-200/50 text-right">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-4">
            Order Form / استمارة الطلب
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0c131d] mb-4">
            اطلب كتابك الآن
          </h2>
          <p className="text-[#59616e] text-base leading-relaxed">
            املأ الاستمارة أدناه لتأكيد طلبك. الدفع عند الاستلام مع ضمان توصيل سريع وآمن.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#f5f6f8] rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-sm">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleOrder}
                className="grid grid-cols-1 md:grid-cols-12 gap-8"
              >
                {/* Left Side: Order details & Summary */}
                <div className="md:col-span-5 flex flex-col justify-between gap-6 border-t md:border-t-0 md:border-r border-slate-200/60 pt-8 md:pt-0 md:pr-8 order-2 md:order-1">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#0c131d] mb-4 flex items-center justify-end gap-2">
                      <span>تفاصيل الطلبية</span>
                      <ShoppingCart size={18} className="text-[#4f46e5]" />
                    </h3>

                    {/* Book info card */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-100 mb-6 flex items-center gap-4 flex-row-reverse">
                      <div className="w-16 h-20 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/book_cover.png" alt="Book Cover" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm text-[#0c131d]">خطة الإنقاذ في العلوم الطبيعية</div>
                        <div className="text-xs text-[#59616e] font-semibold mt-1">3 ثانوي - الأستاذة عباسي ملاك</div>
                        <div className="text-[#4f46e5] font-extrabold text-sm mt-1">{bookPrice} DZD</div>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between mb-4 flex-row-reverse">
                      <span className="text-sm font-bold text-[#0c131d]">الكمية / Quantity</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-lg text-slate-700 hover:bg-slate-50 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-bold text-[#0c131d] w-6 text-center">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-lg text-slate-700 hover:bg-slate-50 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Delivery type selectors */}
                    <div className="space-y-2 mb-6">
                      <span className="text-sm font-bold text-[#0c131d] block mb-1">طريقة التوصيل / Delivery</span>
                      <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-slate-300 transition-colors flex-row-reverse">
                        <div className="flex items-center gap-3 flex-row-reverse">
                          <input
                            type="radio"
                            name="delivery"
                            value="home"
                            checked={deliveryType === 'home'}
                            onChange={() => setDeliveryType('home')}
                            className="accent-[#4f46e5]"
                          />
                          <span className="text-xs font-bold text-[#0c131d]">توصيل إلى باب المنزل (Home Delivery)</span>
                        </div>
                        <span className="text-xs font-extrabold text-[#4f46e5]">{deliveryPrices.home} DZD</span>
                      </label>

                      <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-slate-300 transition-colors flex-row-reverse">
                        <div className="flex items-center gap-3 flex-row-reverse">
                          <input
                            type="radio"
                            name="delivery"
                            value="office"
                            checked={deliveryType === 'office'}
                            onChange={() => setDeliveryType('office')}
                            className="accent-[#4f46e5]"
                          />
                          <span className="text-xs font-bold text-[#0c131d]">استلام من مكتب الشحن (Office pickup)</span>
                        </div>
                        <span className="text-xs font-extrabold text-[#4f46e5]">{deliveryPrices.office} DZD</span>
                      </label>
                    </div>
                  </div>

                  {/* Summary Footer */}
                  <div className="border-t border-slate-200/60 pt-4 mt-4">
                    <div className="flex items-center justify-between text-base font-extrabold text-[#0c131d] flex-row-reverse">
                      <span>المجموع الإجمالي / Total</span>
                      <span className="text-2xl text-[#4f46e5]">{totalPrice} DZD</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form inputs */}
                <div className="md:col-span-7 flex flex-col gap-5 order-1 md:order-2">
                  <h3 className="font-heading text-lg font-bold text-[#0c131d] mb-2 flex items-center justify-end gap-2">
                    <span>معلومات الزبون</span>
                    <Truck size={18} className="text-[#4f46e5]" />
                  </h3>

                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs font-bold flex items-center gap-2 justify-end flex-row-reverse">
                      <AlertCircle size={14} />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5 items-end">
                    <label className="text-xs font-bold text-[#0c131d]">الاسم الكامل / Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="أدخل اسمك الكامل"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:border-[#4f46e5] transition-all text-sm font-bold text-right"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-1.5 items-end">
                    <label className="text-xs font-bold text-[#0c131d]">رقم الهاتف / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="مثال: 0660123456"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:border-[#4f46e5] transition-all text-sm font-bold text-right font-sans"
                    />
                  </div>

                  {/* Wilaya Selector */}
                  <div className="flex flex-col gap-1.5 items-end">
                    <label className="text-xs font-bold text-[#0c131d]">الولاية / Wilaya *</label>
                    <select
                      required
                      value={wilaya}
                      onChange={(e) => setWilaya(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#4f46e5] transition-all text-sm font-bold text-right"
                    >
                      <option value="">اختر ولايتك</option>
                      {wilayas.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4.5 rounded-full bg-[#f3b100] hover:bg-[#e2a400] text-[#0c131d] font-black text-base shadow-lg shadow-[#f3b100]/10 active:scale-98 transition-all cursor-pointer text-center mt-4"
                  >
                    تأكيد الطلب الآن / Confirm Order
                  </button>

                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold mt-2 justify-center sm:justify-end flex-row-reverse">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>جميع طلباتكم محمية ومؤمنة بالكامل. الدفع يكون فقط عند الاستلام.</span>
                  </div>
                </div>

              </motion.form>
            ) : (
              /* Success Screen */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 flex flex-col items-center justify-center gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 mb-2">
                  <Check size={40} className="stroke-[3]" />
                </div>
                <h3 className="font-heading text-3xl font-black text-[#0c131d]">تم تسجيل طلبك بنجاح!</h3>
                <p className="text-[#59616e] text-base max-w-md leading-relaxed font-bold">
                  شكراً لك **{fullName}**! لقد تم تسجيل الطلبية الخاصة بك بنجاح. سنتصل بك هاتفياً على الرقم **{phone}** خلال الـ 24 ساعة القادمة لتأكيد الشحن والتوصيل لـ **{wilaya}**.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFullName('');
                    setPhone('');
                    setWilaya('');
                    setQuantity(1);
                  }}
                  className="px-8 py-3.5 rounded-full border border-[#151c24] text-xs font-bold text-[#151c24] hover:bg-[#0c131d] hover:text-white transition-all cursor-pointer"
                >
                  طلب جديد / Order Another Book
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
