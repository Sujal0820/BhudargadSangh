import React, { useState } from 'react';
import { Phone, Mail, MapPin, Leaf, TrendingUp, ShoppingCart, Users, ChevronLeft, ChevronRight, Star, Award, Calendar, Package } from 'lucide-react';
import Photo1 from '../assets/Photo1.png'; 
import Photo2 from '../assets/Photo2.jpg'; 
import Photo3 from '../assets/Photo3.jpg'; 
import Photo4 from '../assets/Photo4.jpg'; 
import Photo5 from '../assets/Photo5.jpg'; 
import Photo6 from '../assets/Photo6.jpg'; 
import Photo7 from '../assets/Photo7.jpg'; 
import Photo8 from '../assets/Photo8.jpg'; 

const BhudargadSanghWebsite = () => {
  const [activeTab, setActiveTab] = useState('sales');
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample fertilizer products data
  const fertilizers = [
    { id: 1, name: 'यूरिया खत', price: '₹280', unit: 'प्रति बॅग (50 किलो)', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop', stock: 'स्टॉकमध्ये', rating: 4.8, description: 'नायट्रोजन समृद्ध खत' },
    { id: 2, name: 'डीएपी खत', price: '₹1350', unit: 'प्रति बॅग (50 किलो)', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop', stock: 'स्टॉकमध्ये', rating: 4.9, description: 'फॉस्फोरस आणि नायट्रोजन मिश्रण' },
    { id: 3, name: 'एनपीके कॉम्प्लेक्स', price: '₹820', unit: 'प्रति बॅग (50 किलो)', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=200&fit=crop', stock: 'मर्यादित स्टॉक', rating: 4.7, description: 'संपूर्ण पोषक तत्वे' },
    { id: 4, name: 'ऑर्गॅनिक कंपोस्ट', price: '₹180', unit: 'प्रति बॅग (25 किलो)', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop', stock: 'स्टॉकमध्ये', rating: 4.6, description: 'नैसर्गिक सेंद्रिय खत' },
    { id: 5, name: 'पोटाश खत', price: '₹650', unit: 'प्रति बॅग (50 किलो)', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop', stock: 'स्टॉकमध्ये', rating: 4.5, description: 'पोटॅशियम समृद्ध खत' },
    { id: 6, name: 'झिंक सल्फेट', price: '₹450', unit: 'प्रति बॅग (25 किलो)', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=200&fit=crop', stock: 'स्टॉकमध्ये', rating: 4.4, description: 'सूक्ष्म पोषक तत्व' },
  ];

  // Gallery images (8 photos)
  const galleryImages = [
    { url: Photo1, caption: 'आमचे मुख्य दुकान' },
    { url: Photo2, caption: 'खत साठवण केंद्र' },
    { url: Photo3, caption: 'शेतकरी सेवा केंद्र' },
    { url: Photo4, caption: 'गुणवत्ता तपासणी' },
    { url: Photo5, caption: 'डिलिव्हरी ट्रक' },
    { url: Photo6, caption: 'शेतकरी सभा' },
    { url: Photo7, caption: 'आधुनिक यंत्रसामग्री' },
    { url: Photo8, caption: 'कृषी सल्लागार केंद्र' },
  ];

  const salesData = [
    { month: 'जानेवारी', sales: 125, purchase: 140, profit: 15 },
    { month: 'फेब्रुवारी', sales: 142, purchase: 130, profit: 22 },
    { month: 'मार्च', sales: 189, purchase: 195, profit: 35 },
    { month: 'एप्रिल', sales: 156, purchase: 150, profit: 28 },
    { month: 'मे', sales: 203, purchase: 210, profit: 42 },
    { month: 'जून', sales: 178, purchase: 170, profit: 38 },
  ];

  const stats = [
    { icon: Users, value: '५७७', label: 'सभासद संस्था', color: 'text-blue-600' },
    { icon: Package, value: '१९,६३७', label: 'सभासद व्यक्ती', color: 'text-green-600' },
    { icon: Award, value: '६२,१०,६००', label: 'भाग भांडवल', color: 'text-purple-600' },
    { icon: TrendingUp, value: '३,४२,४५,७००', label: 'खेळते भांडवल', color: 'text-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex space-x-6">
            <span>📞 +91 98765 43210</span>
            <span>✉️ btsssg@gmail.com</span>
          </div>
          <div className="flex space-x-4">
            <span>सकाळ ९:०० ते संध्याकाळ ७:००</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">भुदरगड तालुका शेतकरी सहकारी संघ लि.</h1>
                <p className="text-green-600 font-medium">गारगोटी, जि. कोल्हापूर. ता. भुदरगड, जि. कोल्हापूर-४१६ २०९</p>
              </div>
            </div>
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                शेतकऱ्यांचे <span className="text-yellow-300">विश्वसनीय</span> साथीदार
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                गरगोटी येथील सर्वात मोठा खत पुरवठादार • दर्जेदार उत्पादने • योग्य दर
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors">
                  आता ऑर्डर द्या
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-3 px-8 rounded-full transition-colors">
                  आमच्याशी संपर्क साधा
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-green-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Photo Gallery - Grid Layout */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">आमची गॅलरी</h3>
            <p className="text-gray-600 text-lg">आमच्या व्यवसायाची प्रतिमा</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                   onClick={() => setSelectedImage(image)}>
                <div className="relative group">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-48 lg:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-lg font-bold">{image.caption}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Image Popup Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" 
               onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
              >
                ✕ बंद करा
              </button>
              <img
                src={selectedImage.url.replace('w=500&h=400', 'w=1200&h=800')}
                alt={selectedImage.caption}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{selectedImage.caption}</h3>
              </div>
            </div>
          </div>
        )}

        {/* Business Dashboard */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">व्यवसाय डॅशबोर्ड</h3>
            <p className="text-gray-600 text-lg">मासिक विक्री, खरेदी आणि नफा विश्लेषण</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="flex flex-wrap justify-center mb-6">
              <button
                onClick={() => setActiveTab('sales')}
                className={`px-6 py-3 mx-2 mb-2 rounded-full font-semibold transition-colors ${
                  activeTab === 'sales' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                विक्री डेटा
              </button>
              <button
                onClick={() => setActiveTab('purchase')}
                className={`px-6 py-3 mx-2 mb-2 rounded-full font-semibold transition-colors ${
                  activeTab === 'purchase' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                खरेदी डेटा
              </button>
              <button
                onClick={() => setActiveTab('profit')}
                className={`px-6 py-3 mx-2 mb-2 rounded-full font-semibold transition-colors ${
                  activeTab === 'profit' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                नफा विश्लेषण
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {salesData.map((data, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-800">{data.month}</h4>
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    {activeTab === 'sales' && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">विक्री:</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                          {data.sales} टन
                        </span>
                      </div>
                    )}
                    {activeTab === 'purchase' && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">खरेदी:</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">
                          {data.purchase} टन
                        </span>
                      </div>
                    )}
                    {activeTab === 'profit' && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">नफा:</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-bold">
                          ₹{data.profit} लाख
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">आमची उत्पादने</h3>
            <p className="text-gray-600 text-lg">सर्वोच्च दर्जाची खते आणि कृषी उत्पादने</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fertilizers.map((fertilizer) => (
              <div key={fertilizer.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={fertilizer.image}
                    alt={fertilizer.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    fertilizer.stock === 'स्टॉकमध्ये' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                  }`}>
                    {fertilizer.stock}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{fertilizer.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{fertilizer.description}</p>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(fertilizer.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({fertilizer.rating})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-green-600">{fertilizer.price}</span>
                      <p className="text-xs text-gray-500">{fertilizer.unit}</p>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                      ऑर्डर करा
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">आमच्याशी संपर्क साधा</h3>
            <p className="text-gray-600 text-lg">आम्ही तुमच्या सेवेत सदैव तत्पर आहोत</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center group hover:shadow-lg transition-all">
              <div className="bg-green-600 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">फोन करा</h4>
              <p className="text-gray-700 font-semibold">+91 98765 43210</p>
              <p className="text-gray-600">+91 87654 32109</p>
              <p className="text-sm text-gray-500 mt-2">सकाळ ९:०० ते संध्याकाळ ७:००</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center group hover:shadow-lg transition-all">
              <div className="bg-blue-600 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">ईमेल पाठवा</h4>
              <p className="text-gray-700 font-semibold">btsssg@gmail.com</p>
              <p className="text-gray-600">www.bhudargadsangh.in</p>
              <p className="text-sm text-gray-500 mt-2">२४ तासांत उत्तर</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center group hover:shadow-lg transition-all">
              <div className="bg-purple-600 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">भेट द्या</h4>
              <p className="text-gray-700 font-semibold">मुख्य बाजार रोड</p>
              <p className="text-gray-600">गरगोटी, कोल्हापूर</p>
              <p className="text-gray-600">महाराष्ट्र - ४१६२०९</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">भूदरगड संघ गरगोटी</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                आम्ही भुदरगड तालुका शेतकरी सहकारी संघ म्हणून गेल्या अनेक वर्षांपासून शेतकऱ्यांना उत्तम दर्जाची खते पुरवत आहोत. 
                आमचे उद्दिष्ट शेतकऱ्यांच्या समृद्धीत योगदान देणे आहे.
              </p>
              <div className="flex space-x-4">
                <div className="bg-green-600 p-2 rounded-full">
                  <Leaf className="h-5 w-5" />
                </div>
                <div className="bg-blue-600 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="bg-purple-600 p-2 rounded-full">
                  <Award className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-green-400">द्रुत दुवे</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• आमच्याबद्दल</li>
                <li>• उत्पादने</li>
                <li>• सेवा</li>
                <li>• संपर्क</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-green-400">कार्यवेळ</h4>
              <div className="text-gray-300 space-y-2">
                <p>सोमवार - शनिवार</p>
                <p className="font-semibold">सकाळ ९:०० - संध्याकाळ ७:००</p>
                <p>रविवार: बंद</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © २०२५ भुदरगड तालुका शेतकरी सहकारी संघ लि. सर्व हक्क राखीव. | शेतकऱ्यांच्या विकासासाठी समर्पित
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BhudargadSanghWebsite;